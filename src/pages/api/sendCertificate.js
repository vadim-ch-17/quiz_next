import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            host: "mail.adm.tools",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USERNAME,
                to: process.env.EMAIL_TO,
                subject: `New message from ${name}`,
                text: message,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ success: false });
        }
    } else {
        res.status(404).json({ success: false });
    }
}