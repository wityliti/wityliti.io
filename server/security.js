/**
 * Security utilities for RailSahayak payment integration
 * Handles secure communication between wityliti.io and RailSahayak API
 */
import crypto from 'crypto'

// Shared secrets (must match on both ends)
const PAYMENT_TOKEN_SECRET = process.env.PAYMENT_TOKEN_SECRET || 'railsahayak-payment-secret-key'
const API_SIGNING_SECRET = process.env.API_SIGNING_SECRET || 'railsahayak-api-signing-secret'

/**
 * Generate HMAC signature for API requests
 * Used for server-to-server communication
 */
export function generateRequestSignature(payload, timestamp) {
  const message = `${timestamp}.${JSON.stringify(payload)}`
  return crypto
    .createHmac('sha256', API_SIGNING_SECRET)
    .update(message)
    .digest('hex')
}

/**
 * Verify incoming request signature
 */
export function verifyRequestSignature(payload, timestamp, signature) {
  // Check timestamp is within 5 minutes to prevent replay attacks
  const now = Math.floor(Date.now() / 1000)
  const requestTime = parseInt(timestamp, 10)
  
  if (isNaN(requestTime) || Math.abs(now - requestTime) > 300) {
    console.error('Request timestamp out of range:', { now, requestTime })
    return false
  }

  const expectedSignature = generateRequestSignature(payload, timestamp)
  
  // Use timing-safe comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedSignature, 'hex')
    )
  } catch (e) {
    return false
  }
}

/**
 * Encrypt sensitive data before storing/transmitting
 */
export function encryptData(data, key = PAYMENT_TOKEN_SECRET) {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    crypto.scryptSync(key, 'salt', 32),
    iv
  )
  
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex')
  encrypted += cipher.final('hex')
  const authTag = cipher.getAuthTag()
  
  return {
    iv: iv.toString('hex'),
    data: encrypted,
    tag: authTag.toString('hex')
  }
}

/**
 * Decrypt sensitive data
 */
export function decryptData(encryptedObj, key = PAYMENT_TOKEN_SECRET) {
  try {
    const decipher = crypto.createDecipheriv(
      'aes-256-gcm',
      crypto.scryptSync(key, 'salt', 32),
      Buffer.from(encryptedObj.iv, 'hex')
    )
    decipher.setAuthTag(Buffer.from(encryptedObj.tag, 'hex'))
    
    let decrypted = decipher.update(encryptedObj.data, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return JSON.parse(decrypted)
  } catch (e) {
    console.error('Decryption failed:', e.message)
    return null
  }
}

/**
 * Generate a secure nonce for idempotency
 */
export function generateNonce() {
  return crypto.randomBytes(16).toString('hex')
}

/**
 * Verify nonce hasn't been used (requires Redis or similar in production)
 * This is a simple in-memory implementation
 */
const usedNonces = new Map()
const NONCE_EXPIRY = 5 * 60 * 1000 // 5 minutes

export function verifyNonce(nonce) {
  // Clean up expired nonces
  const now = Date.now()
  for (const [key, timestamp] of usedNonces.entries()) {
    if (now - timestamp > NONCE_EXPIRY) {
      usedNonces.delete(key)
    }
  }
  
  if (usedNonces.has(nonce)) {
    return false // Nonce already used
  }
  
  usedNonces.set(nonce, now)
  return true
}

/**
 * Validate payment token structure
 */
export function validateTokenPayload(decoded) {
  const requiredFields = ['user_id', 'plan_id', 'action', 'return_url']
  const validActions = ['subscribe', 'change_plan', 'reactivate']
  
  // Check required fields
  for (const field of requiredFields) {
    if (!decoded[field]) {
      return { valid: false, error: `Missing required field: ${field}` }
    }
  }
  
  // Validate action
  if (!validActions.includes(decoded.action)) {
    return { valid: false, error: `Invalid action: ${decoded.action}` }
  }
  
  // Validate UUIDs
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (!uuidRegex.test(decoded.user_id)) {
    return { valid: false, error: 'Invalid user_id format' }
  }
  if (!uuidRegex.test(decoded.plan_id)) {
    return { valid: false, error: 'Invalid plan_id format' }
  }
  
  // Validate return URL
  try {
    const url = new URL(decoded.return_url)
    const allowedHosts = ['evaluate.railsahayak.com', 'localhost']
    if (!allowedHosts.some(host => url.hostname.includes(host))) {
      return { valid: false, error: 'Invalid return URL host' }
    }
  } catch (e) {
    return { valid: false, error: 'Invalid return URL format' }
  }
  
  return { valid: true }
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  
  // Remove potential XSS vectors
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .substring(0, 1000) // Limit length
}

/**
 * Rate limiter for payment endpoints
 * Simple in-memory implementation (use Redis in production)
 */
const rateLimitStore = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 10 // requests per window

export function checkRateLimit(identifier) {
  const now = Date.now()
  const key = `ratelimit:${identifier}`
  
  const record = rateLimitStore.get(key) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW }
  
  // Reset if window expired
  if (now > record.resetAt) {
    record.count = 0
    record.resetAt = now + RATE_LIMIT_WINDOW
  }
  
  record.count++
  rateLimitStore.set(key, record)
  
  return {
    allowed: record.count <= RATE_LIMIT_MAX,
    remaining: Math.max(0, RATE_LIMIT_MAX - record.count),
    resetAt: record.resetAt
  }
}

/**
 * Middleware to verify request signature for API-to-API calls
 */
export function verifySignatureMiddleware(req, res, next) {
  const signature = req.headers['x-signature']
  const timestamp = req.headers['x-timestamp']
  
  if (!signature || !timestamp) {
    // Allow unsigned requests but mark them
    req.isSignedRequest = false
    return next()
  }
  
  if (!verifyRequestSignature(req.body, timestamp, signature)) {
    return res.status(401).json({ 
      success: false, 
      error: 'Invalid request signature' 
    })
  }
  
  req.isSignedRequest = true
  next()
}

/**
 * Middleware for payment endpoint rate limiting
 */
export function paymentRateLimitMiddleware(req, res, next) {
  const identifier = req.ip || req.headers['x-forwarded-for'] || 'unknown'
  const result = checkRateLimit(identifier)
  
  res.setHeader('X-RateLimit-Remaining', result.remaining)
  res.setHeader('X-RateLimit-Reset', result.resetAt)
  
  if (!result.allowed) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((result.resetAt - Date.now()) / 1000)
    })
  }
  
  next()
}

export default {
  generateRequestSignature,
  verifyRequestSignature,
  encryptData,
  decryptData,
  generateNonce,
  verifyNonce,
  validateTokenPayload,
  sanitizeInput,
  checkRateLimit,
  verifySignatureMiddleware,
  paymentRateLimitMiddleware
}
