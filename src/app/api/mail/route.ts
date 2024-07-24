import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == '465' ? true : false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER, // your email address
    pass: process.env.SMTP_PASS, // your email password
  },
});

export async function POST(req: NextRequest) {
  const { to, subject, text } = await req.json();

  try {
    // Send email
    const info = await transporter.sendMail({
      from: `${process.env.EMAIL_FROM}`,
      to: to || `${process.env.EMAIL_FROM}`,
      subject,
      text,
      // html: "<b>Hello world?</b>", // html body if we want it in the future
    });

    return NextResponse.json(
      { message: `Email sent successfully. Message ID: ${info.messageId}` },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse('Failed to send email.', { status: 500 });
  }
}
