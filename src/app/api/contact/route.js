import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cchamal4@gmail.com",       // your Gmail
        pass: process.env.EMAIL_PASS,     // app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "cchamal4@gmail.com",          // receive in same email
      subject: `New message from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
