import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // For Gmail (you can also use other services like SendGrid)
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

export const sendVerificationEmail = (email, verificationToken) => {
  const verificationUrl = `http://your-domain.com/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email address.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
