import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, image, emailTo } = req.body;
    // console.log(req.body);

    const hasImage = () => {
      const base64Image = image.split(";base64,").pop();
      return image && { attachments: [{ filename: 'certificate.jpg', content: base64Image, encoding: 'base64' }] }
    }

    const sendTo = emailTo || process.env.EMAIL_TO;

    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: sendTo,
      subject: `New message from ${name}`,
      text: message,
    };

    if (image) {
      mailOptions = { ...mailOptions, ...hasImage() };
    }

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
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(404).json({ success: false });
  }
}