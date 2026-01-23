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

    const msg = {
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

    try {
        await sgMail.send(msg);
        console.log(`Email sent successfully to ${toEmail}`);
        res.json({ success: true });
    } catch (error) {
        console.error('SendGrid Error:', error.response?.body || error.message);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Wityliti API running on port ${PORT}`);
});
