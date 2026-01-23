import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors({
  origin: ['https://wityliti.io', 'http://localhost:5001', 'http://localhost:5173'],
  methods: ['POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'wityliti-api' });
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, details, type, timeline, budget } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'connect@wityliti.io';
  const toEmail = process.env.SENDGRID_TO_EMAIL || 'sushil@wityliti.io';

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
            <p style="color: #6b7280; font-size: 12px;">This email was sent from the Wityliti.io website contact form.</p>
          </div>
        </body>
      </html>
    `
  };

  // Confirmation email to the person who submitted
  const userMsg = {
    to: email,
    from: { email: fromEmail, name: 'Wityliti' },
    subject: `Thank you for contacting Wityliti!`,
    html: `
      <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%); border-radius: 16px; padding: 40px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #10b981; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
              <p style="color: #9ca3af; margin-top: 8px;">We've received your project inquiry</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
              <h3 style="color: #ffffff; margin-top: 0;">Your Submission Summary</h3>
              <table style="width: 100%; color: #d1d5db;">
                <tr><td style="padding: 8px 0; color: #9ca3af;">Project Type:</td><td style="padding: 8px 0;">${type || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af;">Timeline:</td><td style="padding: 8px 0;">${timeline || 'Not specified'}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af;">Budget:</td><td style="padding: 8px 0;">${budget || 'Not specified'}</td></tr>
              </table>
            </div>
            
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
              <p style="color: #10b981; margin: 0; font-weight: 600;">What happens next?</p>
              <p style="color: #d1d5db; margin: 8px 0 0 0; font-size: 14px;">Our team will review your requirements and get back to you within 24 hours with a tailored proposal.</p>
            </div>
            
            <p style="color: #9ca3af; font-size: 14px; text-align: center;">
              In the meantime, feel free to book a discovery call:
              <a href="https://wityliti.io/contact" style="color: #10b981; text-decoration: none;"> Schedule a Meeting</a>
            </p>
            
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
