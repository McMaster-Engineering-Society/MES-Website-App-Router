import nodemailer from 'nodemailer';

export async function sendEmailService(
  to: string,
  subject: string,
  text: string,
  html: string,
): Promise<void> {
  try {
    const { SMTP_SERVER, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM } =
      process.env;
    if (!SMTP_SERVER || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM) {
      throw new Error(
        'Missing required environment variables for email configuration',
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_SERVER,
      port: parseInt(SMTP_PORT),
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_FROM,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    // eslint-disable-next-line no-console
    console.log('Email sent: ' + info.response);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending email:', error);
  }
}
