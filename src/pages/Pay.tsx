/**
 * RailSahayak Payment Page
 * Hosted on wityliti.io for Razorpay compliance
 */
import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, Loader2, Shield, CreditCard, Building2 } from 'lucide-react'

// Types
interface User {
  id: string
  email: string
  full_name: string
  organization: string | null
}

interface Plan {
  id: string
  name: string
  price_inr: number
  features: string[]
  trial_days: number
}

interface SessionData {
  user: User
  plan: Plan
  action: 'subscribe' | 'change_plan'
  return_url: string
}

interface CheckoutData {
  type: 'subscription' | 'order'
  subscription_id?: string
  order_id?: string
  key_id: string
  amount: number
  currency: string
  name: string
  description: string
  prefill: {
    name: string
    email: string
    contact: string
  }
  user_id: string
  plan_id: string
  return_url: string
}

// API URL
const API_URL = import.meta.env.VITE_API_URL || 'https://api.wityliti.io'

export default function Pay() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [status, setStatus] = useState<'loading' | 'ready' | 'processing' | 'success' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)
  const [sessionData, setSessionData] = useState<SessionData | null>(null)
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null)

  const token = searchParams.get('token')

  // Validate session on mount
  useEffect(() => {
    if (!token) {
      setError('Invalid payment link. Please try again from the RailSahayak app.')
      setStatus('error')
      return
    }

    validateSession()
  }, [token])

  async function validateSession() {
    try {
      const response = await fetch(`${API_URL}/api/railsahayak/validate-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Session validation failed')
      }

      setSessionData(data.data)
      setStatus('ready')
    } catch (err: any) {
      console.error('Session validation error:', err)
      setError(err.message || 'Failed to validate payment session')
      setStatus('error')
    }
  }

  async function initiatePayment() {
    if (!token || !sessionData) return

    setStatus('processing')

    try {
      // Create checkout session
      const response = await fetch(`${API_URL}/api/railsahayak/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to create checkout')
      }

      setCheckoutData(data.data)

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        await loadRazorpayScript()
      }

      // Open Razorpay checkout
      openRazorpayCheckout(data.data)
    } catch (err: any) {
      console.error('Payment initiation error:', err)
      setError(err.message || 'Failed to initiate payment')
      setStatus('error')
    }
  }

  function loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load Razorpay'))
      document.body.appendChild(script)
    })
  }

  function openRazorpayCheckout(checkout: CheckoutData) {
    const options = {
      key: checkout.key_id,
      amount: checkout.amount,
      currency: checkout.currency,
      name: checkout.name,
      description: checkout.description,
      subscription_id: checkout.subscription_id,
      order_id: checkout.order_id,
      prefill: checkout.prefill,
      theme: {
        color: '#10b981'
      },
      handler: async function(response: any) {
        await handlePaymentSuccess(response, checkout)
      },
      modal: {
        ondismiss: function() {
          setStatus('ready')
        }
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.on('payment.failed', function(response: any) {
      handlePaymentFailure(response, checkout)
    })
    razorpay.open()
  }

  async function handlePaymentSuccess(response: any, checkout: CheckoutData) {
    setStatus('processing')

    try {
      // Verify payment with backend
      const verifyResponse = await fetch(`${API_URL}/api/railsahayak/payment-success`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_subscription_id: response.razorpay_subscription_id,
          razorpay_signature: response.razorpay_signature,
          user_id: checkout.user_id,
          plan_id: checkout.plan_id
        })
      })

      const data = await verifyResponse.json()

      if (!verifyResponse.ok || !data.success) {
        throw new Error(data.error || 'Payment verification failed')
      }

      setStatus('success')

      // Redirect back to RailSahayak after 3 seconds
      setTimeout(() => {
        const returnUrl = new URL(checkout.return_url)
        returnUrl.searchParams.set('status', 'success')
        returnUrl.searchParams.set('payment_id', response.razorpay_payment_id)
        window.location.href = returnUrl.toString()
      }, 3000)
    } catch (err: any) {
      console.error('Payment verification error:', err)
      setError(err.message || 'Payment verification failed')
      setStatus('error')
    }
  }

  function handlePaymentFailure(response: any, checkout: CheckoutData) {
    console.error('Payment failed:', response.error)
    setError(response.error?.description || 'Payment failed')
    setStatus('error')

    // Redirect back with failure status after 5 seconds
    setTimeout(() => {
      const returnUrl = new URL(checkout.return_url)
      returnUrl.searchParams.set('status', 'failed')
      returnUrl.searchParams.set('error', response.error?.code || 'payment_failed')
      window.location.href = returnUrl.toString()
    }, 5000)
  }

  function formatPrice(amount: number) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  // Error state
  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.href = sessionData?.return_url || 'https://evaluate.railsahayak.com'}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Return to RailSahayak
          </button>
        </div>
      </div>
    )
  }

  // Success state
  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-4">
            Your {sessionData?.plan.name} subscription is now active.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting you back to RailSahayak...
          </p>
          <div className="mt-6">
            <Loader2 className="w-6 h-6 text-emerald-500 animate-spin mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Validating payment session...</p>
        </div>
      </div>
    )
  }

  // Ready state - show payment form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://evaluate.railsahayak.com/logo.png" 
              alt="RailSahayak" 
              className="w-10 h-10 rounded-lg bg-white p-1"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div>
              <h1 className="text-xl font-bold">RailSahayak</h1>
              <p className="text-emerald-100 text-sm">Subscription Payment</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-100 text-sm">
            <Shield className="w-4 h-4" />
            <span>Secure payment via Razorpay</span>
          </div>
        </div>

        {/* Plan Details */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {sessionData?.plan.name} Plan
              </h2>
              <p className="text-sm text-gray-500">Monthly Subscription</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(sessionData?.plan.price_inr || 0)}
              </p>
              <p className="text-sm text-gray-500">/month</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {sessionData?.plan.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Trial info */}
          {sessionData?.plan.trial_days && sessionData.plan.trial_days > 0 && (
            <div className="mt-4 bg-emerald-50 text-emerald-700 text-sm p-3 rounded-lg">
              ✨ Includes {sessionData.plan.trial_days}-day free trial
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Billing Details</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {sessionData?.user.full_name?.charAt(0) || sessionData?.user.email?.charAt(0) || '?'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {sessionData?.user.full_name || sessionData?.user.email}
                </p>
                <p className="text-xs text-gray-500">{sessionData?.user.email}</p>
              </div>
            </div>
            {sessionData?.user.organization && (
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <Building2 className="w-4 h-4" />
                <span>{sessionData.user.organization}</span>
              </div>
            )}
          </div>
        </div>

        {/* Payment Button */}
        <div className="p-6">
          <button
            onClick={initiatePayment}
            disabled={status === 'processing'}
            className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'processing' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                Pay {formatPrice(sessionData?.plan.price_inr || 0)}
              </>
            )}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            By proceeding, you agree to the{' '}
            <a href="/terms" className="text-emerald-500 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-emerald-500 hover:underline">Privacy Policy</a>
          </p>
        </div>

        {/* Security badges */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Powered by Razorpay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wityliti branding */}
      <div className="absolute bottom-4 text-center text-gray-500 text-xs">
        Payment processing by{' '}
        <a href="https://wityliti.io" className="text-emerald-500 hover:underline">
          Wityliti.io
        </a>
      </div>
    </div>
  )
}

// Razorpay type declaration
declare global {
  interface Window {
    Razorpay: any
  }
}
