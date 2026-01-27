/**
 * Razorpay Payment Handler for Wityliti.io
 * Handles payment processing for RailSahayak subscriptions
 */
import Razorpay from 'razorpay'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { createClient } from '@supabase/supabase-js'

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

// Initialize Supabase (RailSahayak's database)
const supabase = createClient(
  process.env.RAILSAHAYAK_SUPABASE_URL,
  process.env.RAILSAHAYAK_SUPABASE_SERVICE_KEY
)

// JWT secret for payment tokens (shared with RailSahayak API)
const PAYMENT_TOKEN_SECRET = process.env.PAYMENT_TOKEN_SECRET || 'railsahayak-payment-secret-key'

// Grace period in days
const GRACE_PERIOD_DAYS = 7
const TRIAL_DAYS = 7

/**
 * Verify payment token from RailSahayak
 */
export function verifyPaymentToken(token) {
  try {
    const decoded = jwt.verify(token, PAYMENT_TOKEN_SECRET)
    return decoded
  } catch (error) {
    console.error('Token verification failed:', error.message)
    return null
  }
}

/**
 * Create payment token (for testing/admin use)
 */
export function createPaymentToken(payload) {
  return jwt.sign(payload, PAYMENT_TOKEN_SECRET, { expiresIn: '1h' })
}

/**
 * Get subscription plans from RailSahayak database
 */
export async function getSubscriptionPlans() {
  const { data, error } = await supabase
    .from('subscription_plans')
    .select('*')
    .eq('is_active', true)
    .order('price_inr', { ascending: true })

  if (error) {
    console.error('Error fetching plans:', error)
    return []
  }
  return data
}

/**
 * Get a specific subscription plan
 */
export async function getSubscriptionPlan(planId) {
  const { data, error } = await supabase
    .from('subscription_plans')
    .select('*')
    .eq('id', planId)
    .single()

  if (error) {
    console.error('Error fetching plan:', error)
    return null
  }
  return data
}

/**
 * Get user profile from RailSahayak
 */
export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching user:', error)
    return null
  }
  return data
}

/**
 * Create or get Razorpay customer
 */
export async function getOrCreateRazorpayCustomer(user) {
  // Check Razorpay credentials
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('Razorpay credentials not configured:', {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET
    })
    throw new Error('Razorpay credentials not configured on server')
  }

  // Check if user already has a Razorpay customer ID in our database
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('razorpay_customer_id')
    .eq('user_id', user.id)
    .single()

  if (subscription?.razorpay_customer_id) {
    console.log('Found existing Razorpay customer in DB:', subscription.razorpay_customer_id)
    return subscription.razorpay_customer_id
  }

  // Try to find existing customer in Razorpay by email
  console.log('Checking for existing Razorpay customer by email:', user.email)
  try {
    const customers = await razorpay.customers.all({
      count: 10
    })
    
    // Find customer by email
    const existingCustomer = customers.items?.find(c => c.email === user.email)
    if (existingCustomer) {
      console.log('Found existing Razorpay customer by email:', existingCustomer.id)
      return existingCustomer.id
    }
  } catch (error) {
    console.log('Could not search customers, will try to create:', error.message)
  }

  // Create new Razorpay customer
  console.log('Creating new Razorpay customer for:', user.email)
  try {
    const customer = await razorpay.customers.create({
      name: user.full_name || user.email,
      email: user.email,
      contact: user.phone || undefined,
      notes: {
        user_id: user.id,
        organization: user.organization || ''
      }
    })
    console.log('Razorpay customer created:', customer.id)
    return customer.id
  } catch (error) {
    // If customer already exists, try to fetch by email again
    if (error.error?.description?.includes('already exists')) {
      console.log('Customer exists error, fetching all customers to find match...')
      try {
        // Fetch customers and find by email
        const customers = await razorpay.customers.all({ count: 100 })
        const existingCustomer = customers.items?.find(c => c.email === user.email)
        if (existingCustomer) {
          console.log('Found existing customer after conflict:', existingCustomer.id)
          return existingCustomer.id
        }
      } catch (fetchError) {
        console.error('Failed to fetch existing customer:', fetchError.message)
      }
    }
    
    console.error('Razorpay customer creation failed:', {
      message: error.message,
      error: error.error,
      statusCode: error.statusCode,
      description: error.error?.description
    })
    throw new Error('Razorpay API error: ' + (error.error?.description || error.message || 'Unknown error'))
  }
}

/**
 * Create Razorpay subscription
 */
export async function createRazorpaySubscription(userId, planId) {
  console.log('createRazorpaySubscription called:', { userId, planId })
  
  const plan = await getSubscriptionPlan(planId)
  if (!plan) {
    console.error('Plan not found:', planId)
    throw new Error('Plan not found')
  }
  console.log('Plan found:', plan.name, 'price:', plan.price_inr)

  const user = await getUserProfile(userId)
  if (!user) {
    console.error('User not found:', userId)
    throw new Error('User not found')
  }
  console.log('User found:', user.email)

  // Get or create Razorpay customer
  let customerId
  try {
    customerId = await getOrCreateRazorpayCustomer(user)
    console.log('Customer ID:', customerId)
  } catch (error) {
    console.error('Failed to create Razorpay customer:', error.message)
    throw new Error('Failed to create customer: ' + error.message)
  }

  // Check if plan has Razorpay plan ID, if not create order instead
  if (plan.razorpay_plan_id) {
    console.log('Creating Razorpay subscription with plan:', plan.razorpay_plan_id)
    try {
      // Create subscription
      const subscription = await razorpay.subscriptions.create({
        plan_id: plan.razorpay_plan_id,
        customer_id: customerId,
        total_count: 12, // 12 months
        quantity: 1,
        customer_notify: 1,
        start_at: Math.floor(Date.now() / 1000) + (TRIAL_DAYS * 24 * 60 * 60), // Start after trial
        notes: {
          user_id: userId,
          plan_id: planId,
          plan_name: plan.name
        }
      })

      // Store subscription in database
      const trialEndsAt = new Date()
      trialEndsAt.setDate(trialEndsAt.getDate() + TRIAL_DAYS)

      await supabase.from('subscriptions').upsert({
        user_id: userId,
        plan_id: planId,
        razorpay_subscription_id: subscription.id,
        razorpay_customer_id: customerId,
        status: 'trial',
        trial_ends_at: trialEndsAt.toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })

      return {
        type: 'subscription',
        subscription_id: subscription.id,
        short_url: subscription.short_url,
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: plan.price_inr * 100,
        currency: 'INR',
        name: 'RailSahayak',
        description: `${plan.name} Plan - Monthly Subscription`,
        customer_id: customerId,
        prefill: {
          name: user.full_name || '',
          email: user.email,
          contact: user.phone || ''
        }
      }
    } catch (error) {
      console.error('Failed to create Razorpay subscription:', error.message)
      throw new Error('Failed to create subscription: ' + error.message)
    }
  } else {
    // Create order for one-time payment (fallback)
    console.log('Creating Razorpay order (no plan_id configured)')
    try {
      const order = await razorpay.orders.create({
        amount: plan.price_inr * 100, // Amount in paise
        currency: 'INR',
        receipt: `order_${userId}_${Date.now()}`,
        notes: {
          user_id: userId,
          plan_id: planId,
          plan_name: plan.name
        }
      })
      console.log('Order created:', order.id)

      return {
        type: 'order',
        order_id: order.id,
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: plan.price_inr * 100,
        currency: 'INR',
        name: 'RailSahayak',
        description: `${plan.name} Plan - Monthly Subscription`,
        prefill: {
          name: user.full_name || '',
          email: user.email,
          contact: user.phone || ''
        }
      }
    } catch (error) {
      console.error('Failed to create Razorpay order:', error.message, error.error)
      throw new Error('Failed to create order: ' + (error.error?.description || error.message))
    }
  }
}

/**
 * Verify Razorpay payment signature
 */
export function verifyPaymentSignature(orderId, paymentId, signature) {
  const body = orderId + '|' + paymentId
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex')

  return expectedSignature === signature
}

/**
 * Verify Razorpay subscription signature
 */
export function verifySubscriptionSignature(subscriptionId, paymentId, signature) {
  const body = paymentId + '|' + subscriptionId
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex')

  return expectedSignature === signature
}

/**
 * Verify webhook signature
 */
export function verifyWebhookSignature(body, signature) {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(JSON.stringify(body))
    .digest('hex')

  return expectedSignature === signature
}

/**
 * Handle successful payment
 */
export async function handlePaymentSuccess(paymentData) {
  const { razorpay_payment_id, razorpay_order_id, razorpay_subscription_id, razorpay_signature, user_id, plan_id } = paymentData

  // Verify signature
  let isValid = false
  if (razorpay_subscription_id) {
    isValid = verifySubscriptionSignature(razorpay_subscription_id, razorpay_payment_id, razorpay_signature)
  } else if (razorpay_order_id) {
    isValid = verifyPaymentSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)
  }

  if (!isValid) {
    throw new Error('Invalid payment signature')
  }

  // Get payment details from Razorpay
  const payment = await razorpay.payments.fetch(razorpay_payment_id)

  // Calculate period dates
  const now = new Date()
  const periodEnd = new Date()
  periodEnd.setMonth(periodEnd.getMonth() + 1)

  // Update subscription status
  const { error: subError } = await supabase.from('subscriptions').upsert({
    user_id: user_id,
    plan_id: plan_id,
    razorpay_subscription_id: razorpay_subscription_id || null,
    status: 'active',
    current_period_start: now.toISOString(),
    current_period_end: periodEnd.toISOString(),
    trial_ends_at: null,
    grace_period_ends_at: null,
    updated_at: now.toISOString()
  }, { onConflict: 'user_id' })

  if (subError) {
    console.error('Error updating subscription:', subError)
    throw new Error('Failed to update subscription')
  }

  // Record payment
  const { error: payError } = await supabase.from('payments').insert({
    user_id: user_id,
    razorpay_payment_id: razorpay_payment_id,
    razorpay_order_id: razorpay_order_id || null,
    razorpay_signature: razorpay_signature,
    amount_inr: payment.amount / 100,
    currency: payment.currency,
    status: 'paid',
    payment_method: payment.method,
    paid_at: new Date(payment.created_at * 1000).toISOString(),
    metadata: {
      card: payment.card || null,
      bank: payment.bank || null,
      wallet: payment.wallet || null,
      vpa: payment.vpa || null
    }
  })

  if (payError) {
    console.error('Error recording payment:', payError)
  }

  // Update profile subscription status
  await supabase.from('profiles').update({
    subscription_status: 'active'
  }).eq('id', user_id)

  return { success: true, payment_id: razorpay_payment_id }
}

/**
 * Handle webhook events from Razorpay
 */
export async function handleWebhook(event, payload) {
  console.log('Webhook event:', event)

  switch (event) {
    case 'subscription.activated':
      await handleSubscriptionActivated(payload)
      break
    case 'subscription.charged':
      await handleSubscriptionCharged(payload)
      break
    case 'subscription.pending':
      await handleSubscriptionPending(payload)
      break
    case 'subscription.halted':
      await handleSubscriptionHalted(payload)
      break
    case 'subscription.cancelled':
      await handleSubscriptionCancelled(payload)
      break
    case 'payment.captured':
      await handlePaymentCaptured(payload)
      break
    case 'payment.failed':
      await handlePaymentFailed(payload)
      break
    default:
      console.log('Unhandled webhook event:', event)
  }
}

async function handleSubscriptionActivated(payload) {
  const subscription = payload.subscription.entity
  const userId = subscription.notes?.user_id

  if (!userId) {
    console.error('No user_id in subscription notes')
    return
  }

  const now = new Date()
  const periodEnd = new Date(subscription.current_end * 1000)

  await supabase.from('subscriptions').update({
    status: 'active',
    current_period_start: now.toISOString(),
    current_period_end: periodEnd.toISOString(),
    trial_ends_at: null,
    updated_at: now.toISOString()
  }).eq('razorpay_subscription_id', subscription.id)

  await supabase.from('profiles').update({
    subscription_status: 'active'
  }).eq('id', userId)
}

async function handleSubscriptionCharged(payload) {
  const subscription = payload.subscription.entity
  const payment = payload.payment.entity
  const userId = subscription.notes?.user_id

  if (!userId) return

  const periodEnd = new Date(subscription.current_end * 1000)

  // Update subscription period
  await supabase.from('subscriptions').update({
    status: 'active',
    current_period_end: periodEnd.toISOString(),
    grace_period_ends_at: null,
    updated_at: new Date().toISOString()
  }).eq('razorpay_subscription_id', subscription.id)

  // Record payment
  await supabase.from('payments').insert({
    user_id: userId,
    razorpay_payment_id: payment.id,
    razorpay_invoice_id: payment.invoice_id || null,
    amount_inr: payment.amount / 100,
    currency: payment.currency,
    status: 'paid',
    payment_method: payment.method,
    paid_at: new Date(payment.created_at * 1000).toISOString()
  })
}

async function handleSubscriptionPending(payload) {
  const subscription = payload.subscription.entity
  const userId = subscription.notes?.user_id

  if (!userId) return

  // Set grace period
  const graceEndsAt = new Date()
  graceEndsAt.setDate(graceEndsAt.getDate() + GRACE_PERIOD_DAYS)

  await supabase.from('subscriptions').update({
    status: 'grace_period',
    grace_period_ends_at: graceEndsAt.toISOString(),
    updated_at: new Date().toISOString()
  }).eq('razorpay_subscription_id', subscription.id)

  await supabase.from('profiles').update({
    subscription_status: 'grace_period'
  }).eq('id', userId)
}

async function handleSubscriptionHalted(payload) {
  const subscription = payload.subscription.entity
  const userId = subscription.notes?.user_id

  if (!userId) return

  await supabase.from('subscriptions').update({
    status: 'expired',
    updated_at: new Date().toISOString()
  }).eq('razorpay_subscription_id', subscription.id)

  await supabase.from('profiles').update({
    subscription_status: 'expired'
  }).eq('id', userId)
}

async function handleSubscriptionCancelled(payload) {
  const subscription = payload.subscription.entity
  const userId = subscription.notes?.user_id

  if (!userId) return

  await supabase.from('subscriptions').update({
    status: 'cancelled',
    cancelled_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }).eq('razorpay_subscription_id', subscription.id)

  await supabase.from('profiles').update({
    subscription_status: 'cancelled'
  }).eq('id', userId)
}

async function handlePaymentCaptured(payload) {
  const payment = payload.payment.entity
  const userId = payment.notes?.user_id

  if (!userId) return

  // Check if payment already recorded
  const { data: existing } = await supabase
    .from('payments')
    .select('id')
    .eq('razorpay_payment_id', payment.id)
    .single()

  if (existing) return

  // Record payment
  await supabase.from('payments').insert({
    user_id: userId,
    razorpay_payment_id: payment.id,
    razorpay_order_id: payment.order_id || null,
    amount_inr: payment.amount / 100,
    currency: payment.currency,
    status: 'paid',
    payment_method: payment.method,
    paid_at: new Date(payment.created_at * 1000).toISOString()
  })
}

async function handlePaymentFailed(payload) {
  const payment = payload.payment.entity
  const userId = payment.notes?.user_id

  if (!userId) return

  // Record failed payment
  await supabase.from('payments').insert({
    user_id: userId,
    razorpay_payment_id: payment.id,
    razorpay_order_id: payment.order_id || null,
    amount_inr: payment.amount / 100,
    currency: payment.currency,
    status: 'failed',
    failure_reason: payment.error_description || payment.error_code,
    created_at: new Date().toISOString()
  })
}

/**
 * Cancel subscription
 */
export async function cancelSubscription(subscriptionId) {
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('razorpay_subscription_id')
    .eq('id', subscriptionId)
    .single()

  if (subscription?.razorpay_subscription_id) {
    await razorpay.subscriptions.cancel(subscription.razorpay_subscription_id)
  }

  await supabase.from('subscriptions').update({
    status: 'cancelled',
    cancelled_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }).eq('id', subscriptionId)

  return { success: true }
}

export { razorpay, supabase }
