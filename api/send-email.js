export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, details, type, timeline, budget } = req.body;

    if (!process.env.SENDGRID_API_KEY) {
        return res.status(500).json({ message: 'Missing SendGrid API Key configuration' });
    }

    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'connect@wityliti.io';
    const toEmail = process.env.SENDGRID_TO_EMAIL || 'youthocrat@gmail.com';

    try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: toEmail, name: 'Wityliti Admin' }],
                    subject: `New Project Inquiry: ${type} (${name})`
                }],
                from: { email: fromEmail, name: 'Wityliti Contact' },
                reply_to: { email: email, name: name },
                content: [{
                    type: 'text/html',
                    value: `
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
                                        <li><strong>Type:</strong> ${type}</li>
                                        <li><strong>Timeline:</strong> ${timeline}</li>
                                        <li><strong>Budget:</strong> ${budget}</li>
                                    </ul>
                                    
                                    <h3 style="color: #374151;">Description</h3>
                                    <p style="background: #f3f4f6; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${details || 'No additional details provided.'}</p>
                                    
                                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
                                    <p style="color: #6b7280; font-size: 12px;">This email was sent from the Wityliti.io website contact form.</p>
                                </div>
                            </body>
                        </html>
                    `
                }]
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('SendGrid Error:', errorData);
            throw new Error(`SendGrid API Error: ${response.status}`);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email send failed:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
