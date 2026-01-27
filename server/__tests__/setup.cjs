/**
 * Jest Test Setup
 * Configure test environment and global mocks
 */

// Set test environment variables
process.env.NODE_ENV = 'test'
process.env.PAYMENT_TOKEN_SECRET = 'test-payment-secret-key-for-testing'
process.env.API_SIGNING_SECRET = 'test-api-signing-secret'
process.env.RAZORPAY_KEY_ID = 'rzp_test_123456789'
process.env.RAZORPAY_KEY_SECRET = 'test-razorpay-key-secret'
process.env.RAZORPAY_WEBHOOK_SECRET = 'test-webhook-secret'
process.env.RAILSAHAYAK_SUPABASE_URL = 'https://test.supabase.co'
process.env.RAILSAHAYAK_SUPABASE_SERVICE_KEY = 'test-service-key'

// Suppress console logs during tests unless debugging
if (process.env.DEBUG !== 'true') {
  global.console = {
    ...console,
    log: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
    // Keep error and warn for debugging
    error: console.error,
    warn: console.warn
  }
}

// Global test utilities
global.createTestToken = (payload, secret = process.env.PAYMENT_TOKEN_SECRET) => {
  const jwt = require('jsonwebtoken')
  return jwt.sign(payload, secret, { expiresIn: '1h' })
}

global.validTestPayload = {
  user_id: '550e8400-e29b-41d4-a716-446655440000',
  plan_id: '660e8400-e29b-41d4-a716-446655440001',
  action: 'subscribe',
  return_url: 'https://evaluate.railsahayak.com/subscription'
}

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks()
})
