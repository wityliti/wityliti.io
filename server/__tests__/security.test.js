/**
 * Security Module Tests
 * Tests for encryption, signing, and validation utilities
 */
import {
  generateRequestSignature,
  verifyRequestSignature,
  encryptData,
  decryptData,
  generateNonce,
  verifyNonce,
  validateTokenPayload,
  sanitizeInput,
  checkRateLimit
} from '../security.js'

describe('Security Module', () => {
  
  describe('Request Signature', () => {
    const payload = { user_id: 'test-123', plan_id: 'plan-456' }
    const timestamp = Math.floor(Date.now() / 1000).toString()

    test('should generate consistent signature for same payload', () => {
      const sig1 = generateRequestSignature(payload, timestamp)
      const sig2 = generateRequestSignature(payload, timestamp)
      expect(sig1).toBe(sig2)
    })

    test('should generate different signature for different payload', () => {
      const sig1 = generateRequestSignature(payload, timestamp)
      const sig2 = generateRequestSignature({ ...payload, extra: 'data' }, timestamp)
      expect(sig1).not.toBe(sig2)
    })

    test('should verify valid signature', () => {
      const signature = generateRequestSignature(payload, timestamp)
      expect(verifyRequestSignature(payload, timestamp, signature)).toBe(true)
    })

    test('should reject invalid signature', () => {
      expect(verifyRequestSignature(payload, timestamp, 'invalid-signature')).toBe(false)
    })

    test('should reject expired timestamp', () => {
      const oldTimestamp = (Math.floor(Date.now() / 1000) - 400).toString() // 6+ minutes ago
      const signature = generateRequestSignature(payload, oldTimestamp)
      expect(verifyRequestSignature(payload, oldTimestamp, signature)).toBe(false)
    })

    test('should accept recent timestamp', () => {
      const recentTimestamp = (Math.floor(Date.now() / 1000) - 60).toString() // 1 minute ago
      const signature = generateRequestSignature(payload, recentTimestamp)
      expect(verifyRequestSignature(payload, recentTimestamp, signature)).toBe(true)
    })
  })

  describe('Data Encryption', () => {
    const sensitiveData = {
      cardNumber: '4111111111111111',
      cvv: '123',
      userId: 'user-uuid-123'
    }

    test('should encrypt and decrypt data correctly', () => {
      const encrypted = encryptData(sensitiveData)
      expect(encrypted).toHaveProperty('iv')
      expect(encrypted).toHaveProperty('data')
      expect(encrypted).toHaveProperty('tag')
      
      const decrypted = decryptData(encrypted)
      expect(decrypted).toEqual(sensitiveData)
    })

    test('should produce different ciphertext each time (due to random IV)', () => {
      const encrypted1 = encryptData(sensitiveData)
      const encrypted2 = encryptData(sensitiveData)
      expect(encrypted1.data).not.toBe(encrypted2.data)
      expect(encrypted1.iv).not.toBe(encrypted2.iv)
    })

    test('should fail to decrypt with tampered data', () => {
      const encrypted = encryptData(sensitiveData)
      encrypted.data = encrypted.data.replace('a', 'b') // Tamper with data
      const decrypted = decryptData(encrypted)
      expect(decrypted).toBeNull()
    })

    test('should fail to decrypt with wrong tag', () => {
      const encrypted = encryptData(sensitiveData)
      encrypted.tag = 'wrong-tag'
      const decrypted = decryptData(encrypted)
      expect(decrypted).toBeNull()
    })
  })

  describe('Nonce Verification', () => {
    test('should accept new nonce', () => {
      const nonce = generateNonce()
      expect(verifyNonce(nonce)).toBe(true)
    })

    test('should reject reused nonce', () => {
      const nonce = generateNonce()
      verifyNonce(nonce) // First use
      expect(verifyNonce(nonce)).toBe(false) // Reuse attempt
    })

    test('should generate unique nonces', () => {
      const nonces = new Set()
      for (let i = 0; i < 100; i++) {
        nonces.add(generateNonce())
      }
      expect(nonces.size).toBe(100)
    })
  })

  describe('Token Payload Validation', () => {
    const validPayload = {
      user_id: '550e8400-e29b-41d4-a716-446655440000',
      plan_id: '660e8400-e29b-41d4-a716-446655440001',
      action: 'subscribe',
      return_url: 'https://evaluate.railsahayak.com/subscription'
    }

    test('should accept valid payload', () => {
      const result = validateTokenPayload(validPayload)
      expect(result.valid).toBe(true)
    })

    test('should reject missing user_id', () => {
      const result = validateTokenPayload({ ...validPayload, user_id: undefined })
      expect(result.valid).toBe(false)
      expect(result.error).toContain('user_id')
    })

    test('should reject missing plan_id', () => {
      const result = validateTokenPayload({ ...validPayload, plan_id: undefined })
      expect(result.valid).toBe(false)
      expect(result.error).toContain('plan_id')
    })

    test('should reject invalid action', () => {
      const result = validateTokenPayload({ ...validPayload, action: 'hack' })
      expect(result.valid).toBe(false)
      expect(result.error).toContain('action')
    })

    test('should accept valid actions', () => {
      const actions = ['subscribe', 'change_plan', 'reactivate']
      for (const action of actions) {
        const result = validateTokenPayload({ ...validPayload, action })
        expect(result.valid).toBe(true)
      }
    })

    test('should reject invalid UUID format', () => {
      const result = validateTokenPayload({ ...validPayload, user_id: 'not-a-uuid' })
      expect(result.valid).toBe(false)
      expect(result.error).toContain('user_id format')
    })

    test('should reject invalid return URL host', () => {
      const result = validateTokenPayload({ 
        ...validPayload, 
        return_url: 'https://evil-site.com/phishing' 
      })
      expect(result.valid).toBe(false)
      expect(result.error).toContain('return URL')
    })

    test('should accept localhost for development', () => {
      const result = validateTokenPayload({ 
        ...validPayload, 
        return_url: 'http://localhost:5173/subscription' 
      })
      expect(result.valid).toBe(true)
    })
  })

  describe('Input Sanitization', () => {
    test('should remove HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script')
    })

    test('should remove javascript: protocol', () => {
      expect(sanitizeInput('javascript:alert(1)')).toBe('alert(1)')
    })

    test('should remove event handlers', () => {
      expect(sanitizeInput('onclick=malicious()')).toBe('malicious()')
    })

    test('should trim whitespace', () => {
      expect(sanitizeInput('  hello world  ')).toBe('hello world')
    })

    test('should limit length', () => {
      const longString = 'a'.repeat(2000)
      expect(sanitizeInput(longString).length).toBe(1000)
    })

    test('should handle non-string input', () => {
      expect(sanitizeInput(123)).toBe(123)
      expect(sanitizeInput(null)).toBe(null)
      expect(sanitizeInput({ a: 1 })).toEqual({ a: 1 })
    })
  })

  describe('Rate Limiting', () => {
    test('should allow requests within limit', () => {
      const identifier = `test-${Date.now()}`
      for (let i = 0; i < 10; i++) {
        const result = checkRateLimit(identifier)
        expect(result.allowed).toBe(true)
      }
    })

    test('should block requests exceeding limit', () => {
      const identifier = `test-exceed-${Date.now()}`
      // Make 10 allowed requests
      for (let i = 0; i < 10; i++) {
        checkRateLimit(identifier)
      }
      // 11th request should be blocked
      const result = checkRateLimit(identifier)
      expect(result.allowed).toBe(false)
      expect(result.remaining).toBe(0)
    })

    test('should track remaining requests', () => {
      const identifier = `test-remaining-${Date.now()}`
      const result1 = checkRateLimit(identifier)
      expect(result1.remaining).toBe(9)
      
      const result2 = checkRateLimit(identifier)
      expect(result2.remaining).toBe(8)
    })
  })
})
