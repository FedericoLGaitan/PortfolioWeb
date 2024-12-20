import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any
) {
  if (req.method === 'POST') {
    const { name, email, description } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example using Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECIPIENT, // Destination email address
        subject: `Contact Form Submission from ${name}`,
        text: description,
        html: `<p>${description}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
