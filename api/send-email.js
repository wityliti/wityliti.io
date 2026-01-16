export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, details, type, timeline, budget } = req.body;

    if (!process.env.BREVO_API_KEY) {
        return res.status(500).json({ message: 'Missing API Key configuration' });
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'Wityliti Contact', email: 'connect@wityliti.io' },
                to: [{ email: 'youthocrat@gmail.com', name: 'Wityliti Admin' }], // Ideally config from env too
                subject: `New Project Inquiry: ${type} (${name})`,
                htmlContent: `
          <html>
            <body>
              <h2>New Project Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <hr />
              <h3>Project Details</h3>
              <ul>
                <li><strong>Type:</strong> ${type}</li>
                <li><strong>Timeline:</strong> ${timeline}</li>
                <li><strong>Budget:</strong> ${budget}</li>
              </ul>
              <hr />
              <h3>Description</h3>
              <p>${details}</p>
            </body>
          </html>
        `
            })
        });

        if (!response.ok) {
            throw new Error(`Brevo API Error: ${response.statusText}`);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email send failed:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
