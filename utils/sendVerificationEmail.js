// utils/sendVerificationEmail.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // e.g. your Gmail
    pass: process.env.EMAIL_PASS, // use App Password for Gmail
  },
});

export const sendVerificationEmail = async (email, token) => {
  const url = `${process.env.BASE_URL}/api/users/verify-email/${token}`;
  await transporter.sendMail({
    from: `"Your App Name" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `<p>Click the link below to verify your email:</p><a href="${url}">${url}</a>`,
  });
};
