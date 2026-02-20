import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import OpenAI from 'openai';
import {
  verifyPaymentToken,
  createPaymentToken,
  getSubscriptionPlans,
  getSubscriptionPlan,
  getUserProfile,
  createRazorpaySubscription,
  handlePaymentSuccess,
  handleWebhook,
  verifyWebhookSignature,
  cancelSubscription
} from './razorpay.js';
import {
  validateTokenPayload,
  sanitizeInput,
  verifySignatureMiddleware,
  paymentRateLimitMiddleware
} from './security.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors({
  origin: [
    'https://wityliti.io',
    'https://www.wityliti.io',
    'http://localhost:5001',
    'http://localhost:5173',
    'https://evaluate.railsahayak.com',
    'http://localhost:5174',
    'capacitor://localhost',
    'ionic://localhost'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'wityliti-api' });
});

// ============================================
// RailSahayak Payment Routes
// ============================================

/**
 * Get available subscription plans
 */
app.get('/api/railsahayak/plans', async (req, res) => {
  try {
    const plans = await getSubscriptionPlans();
    res.json({ success: true, data: plans });
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch plans' });
  }
});

/**
 * Validate payment token and get session data
 * Called by wityliti.io frontend to verify the payment session
 */
app.post('/api/railsahayak/validate-session', paymentRateLimitMiddleware, async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, error: 'Token required' });
    }

    // Sanitize input
    const sanitizedToken = sanitizeInput(token);

    const decoded = verifyPaymentToken(sanitizedToken);
    if (!decoded) {
      return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    // Validate token payload structure
    const validation = validateTokenPayload(decoded);
    if (!validation.valid) {
      console.error('Token payload validation failed:', validation.error);
      return res.status(400).json({ success: false, error: 'Invalid token payload' });
    }

    // Get user and plan details
    const [user, plan] = await Promise.all([
      getUserProfile(decoded.user_id),
      getSubscriptionPlan(decoded.plan_id)
    ]);

    if (!user || !plan) {
      return res.status(404).json({ success: false, error: 'User or plan not found' });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          full_name: user.full_name,
          organization: user.organization
        },
        plan: {
          id: plan.id,
          name: plan.name,
          price_inr: plan.price_inr,
          features: plan.features,
          trial_days: plan.trial_days
        },
        action: decoded.action, // 'subscribe' or 'change_plan'
        return_url: decoded.return_url
      }
    });
  } catch (error) {
    console.error('Session validation error:', error);
    res.status(500).json({ success: false, error: 'Validation failed' });
  }
});

/**
 * Initialize Razorpay checkout
 * Creates subscription/order and returns checkout options
 */
app.post('/api/railsahayak/create-checkout', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, error: 'Token required' });
    }

    // Check Razorpay credentials
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay credentials not configured');
      return res.status(500).json({ success: false, error: 'Payment system not configured' });
    }

    const decoded = verifyPaymentToken(token);
    if (!decoded) {
      return res.status(401).json({ success: false, error: 'Invalid or expired token' });
    }

    console.log('Creating checkout for user:', decoded.user_id, 'plan:', decoded.plan_id);

    const checkoutOptions = await createRazorpaySubscription(decoded.user_id, decoded.plan_id);

    console.log('Checkout created successfully:', checkoutOptions.type);

    res.json({
      success: true,
      data: {
        ...checkoutOptions,
        user_id: decoded.user_id,
        plan_id: decoded.plan_id,
        return_url: decoded.return_url
      }
    });
  } catch (error) {
    console.error('Checkout creation error:', error.message, error.stack);
    // Return more detailed error in development, generic in production
    const errorMessage = process.env.NODE_ENV === 'production'
      ? 'Failed to create checkout'
      : error.message || 'Failed to create checkout';
    res.status(500).json({ success: false, error: errorMessage, details: error.message });
  }
});

/**
 * Handle successful payment callback
 */
app.post('/api/railsahayak/payment-success', async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_subscription_id,
      razorpay_signature,
      user_id,
      plan_id
    } = req.body;

    if (!razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Missing payment data' });
    }

    const result = await handlePaymentSuccess({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_subscription_id,
      razorpay_signature,
      user_id,
      plan_id
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Payment success handling error:', error);
    res.status(500).json({ success: false, error: error.message || 'Payment verification failed' });
  }
});

/**
 * Razorpay webhook endpoint
 */
app.post('/api/railsahayak/webhook', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'];

    // Verify webhook signature
    if (process.env.RAZORPAY_WEBHOOK_SECRET && signature) {
      const isValid = verifyWebhookSignature(req.body, signature);
      if (!isValid) {
        console.error('Invalid webhook signature');
        return res.status(400).json({ error: 'Invalid signature' });
      }
    }

    const { event, payload } = req.body;
    await handleWebhook(event, payload);

    res.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

/**
 * Cancel subscription (admin use)
 */
app.post('/api/railsahayak/cancel-subscription', async (req, res) => {
  try {
    const { token, subscription_id } = req.body;

    // Verify admin token
    const decoded = verifyPaymentToken(token);
    if (!decoded || !decoded.is_admin) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const result = await cancelSubscription(subscription_id);
    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Cancellation error:', error);
    res.status(500).json({ success: false, error: 'Cancellation failed' });
  }
});

/**
 * Get Razorpay key ID (public)
 */
app.get('/api/railsahayak/config', (req, res) => {
  res.json({
    success: true,
    data: {
      razorpay_key_id: process.env.RAZORPAY_KEY_ID,
      trial_days: 7,
      grace_period_days: 7
    }
  });
});

// Extract domain from email
function extractDomain(email) {
  const domain = email.split('@')[1];
  // Common personal email domains
  const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'protonmail.com', 'mail.com'];
  return personalDomains.includes(domain) ? null : domain;
}

// Generate AI-personalized email content
async function generatePersonalizedEmail(name, email, type, timeline, budget, details) {
  const businessDomain = extractDomain(email);

  const projectTypeDescriptions = {
    'web': 'Web Platform (SaaS, Dashboard, or Website)',
    'mobile': 'Mobile App (iOS, Android, or Cross-platform)',
    'ai': 'AI Solution (LLMs, Predictive Models, or Automation)',
    'iot': 'IoT System (Hardware Integration & Sensor Networks)'
  };

  const timelineDescriptions = {
    'urgent': 'less than 1 month (urgent)',
    'standard': '1-3 months (standard MVP)',
    'relaxed': '3-6 months (enterprise scale)',
    'ongoing': 'ongoing long-term retainer'
  };

  const budgetDescriptions = {
    'micro': 'under $10k (small scope)',
    'small': '$10k-$50k (medium scope)',
    'medium': '$50k-$100k (large scope)',
    'large': '$100k+ (enterprise)'
  };

  const wityliliServices = `
Wityliti.io offers:
1. Climate Tech Solutions - Sustainability software, carbon tracking, ESG compliance
2. Cyber Security - Zero-trust architecture, penetration testing, cloud security
3. Custom Software Development - Web platforms, mobile apps, AI solutions
4. IoT & Sensor Networks - Hardware integration, real-time monitoring
5. Products: Afforestation (Shopify CO2 offset), WityLogix (AI logistics), Cyklo (crypto platform)
    `;

  const prompt = `You are a friendly business development specialist at Wityliti.io, a climate tech and cyber security company.

A potential client just submitted an inquiry. Create a warm, personalized thank-you email that:
1. Feels human and genuine, not corporate or robotic
2. References their specific project needs
3. Shows you understand their timeline and budget constraints
4. ${businessDomain ? `Briefly mention you noticed they're from ${businessDomain} - show genuine interest in their work (be subtle, don't be creepy)` : 'Connect with them personally'}
5. Suggest specific Wityliti services that match their needs
6. Create urgency without being pushy
7. End with a clear next step

CLIENT DETAILS:
- Name: ${name}
- Email: ${email}
- Business Domain: ${businessDomain || 'Personal email'}
- Project Type: ${projectTypeDescriptions[type] || type}
- Timeline: ${timelineDescriptions[timeline] || timeline}
- Budget: ${budgetDescriptions[budget] || budget}
- Their Description: ${details || 'Not provided'}

${wityliliServices}

Write ONLY the email body content (no subject line, no HTML tags, just plain text that will be formatted later).
Keep it under 200 words. Be warm, professional but casual. Sign off as "The Wityliti Team".
Don't use generic phrases like "I hope this email finds you well". Be creative and genuine.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error.message);
    // Fallback to template if AI fails
    return null;
  }
}

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, details, type, timeline, budget } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'connect@wityliti.io';
  const toEmail = process.env.SENDGRID_TO_EMAIL || 'sushil@wityliti.io';

  // Generate AI-personalized content
  let personalizedContent = await generatePersonalizedEmail(name, email, type, timeline, budget, details);

  // Fallback content if AI fails
  const fallbackContent = `Hey ${name}!

Thanks for reaching out about your ${type || 'project'}. We're genuinely excited to learn more about what you're building.

We've noted your timeline and budget, and our team is already thinking about how we can help bring your vision to life. Expect to hear from us within 24 hours with some initial thoughts.

In the meantime, feel free to book a quick call if you'd like to chat sooner: https://wityliti.io/contact

Looking forward to this!

The Wityliti Team`;

  const emailContent = personalizedContent || fallbackContent;

  // Email to admin
  const adminMsg = {
    to: toEmail,
    from: { email: fromEmail, name: 'Wityliti Contact' },
    replyTo: { email: email, name: name },
    subject: `New Project Inquiry: ${type || 'General'} (${name})`,
    html: `
      <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #10b981; margin-top: 0;">New Project Inquiry</h2>
            
            <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 4px 0;"><strong>Domain:</strong> ${extractDomain(email) || 'Personal'}</p>
            </div>
            
            <h3 style="color: #374151;">Project Details</h3>
            <ul style="background: #f3f4f6; padding: 16px 16px 16px 32px; border-radius: 8px;">
              <li><strong>Type:</strong> ${type || 'Not specified'}</li>
              <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
              <li><strong>Budget:</strong> ${budget || 'Not specified'}</li>
            </ul>
            
            <h3 style="color: #374151;">Description</h3>
            <p style="background: #f3f4f6; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${details || 'No additional details provided.'}</p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            
            <h3 style="color: #374151;">AI-Generated Response Sent:</h3>
            <div style="background: #ecfdf5; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="white-space: pre-wrap; margin: 0;">${emailContent}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 16px;">This email was sent from the Wityliti.io website contact form.</p>
          </div>
        </body>
      </html>
    `
  };

  // Personalized email to the person who submitted
  const userMsg = {
    to: email,
    from: { email: fromEmail, name: 'Wityliti' },
    subject: `${name}, thanks for reaching out! 🚀`,
    html: `
      <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%); border-radius: 16px; padding: 40px; border: 1px solid rgba(255,255,255,0.1);">
            
            <div style="margin-bottom: 24px;">
              <p style="color: #e5e7eb; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${emailContent}</p>
            </div>
            
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://wityliti.io/contact" style="display: inline-block; background: #10b981; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600;">Book a Discovery Call</a>
            </div>
            
            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;">
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              © 2026 Wityliti.io | Climate Tech & Cyber Security<br>
              <a href="https://wityliti.io" style="color: #10b981; text-decoration: none;">wityliti.io</a>
            </p>
          </div>
        </body>
      </html>
    `
  };

  try {
    // Send both emails
    await Promise.all([
      sgMail.send(adminMsg),
      sgMail.send(userMsg)
    ]);
    console.log(`Emails sent successfully - Admin: ${toEmail}, User: ${email}`);
    res.json({ success: true });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error.message);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Wityliti API running on port ${PORT}`);
});
