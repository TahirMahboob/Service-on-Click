const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const emailPassword = process.env?.EMAIL_PASSWORD;
const emailID = process.env?.EMAIL_ID;
const emailTitle = process.env?.EMAIL_TITLE;
const secret = process.env?.JWT_SECRET_KEY;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587, // 465 for secure connections
  secure: false, // true for port 465, false for 587
  auth: {
    user: emailID,
    pass: emailPassword,
  },
});

const verifyConnection = async () => {
  try {
    return await transporter.verify();
  } catch (error) {
    console.error(error);
    return false;
  }
};

const sendResetLink = async (recipient) => {
  if (!await verifyConnection()) return { done: false, message: "Failed to connect to the email server." };

  const ResetToken = jwt.sign({ email: recipient }, secret, {
    expiresIn: '15m',
  });

  const message = {
    from: `${emailTitle} <${emailID}>`,
    to: recipient,
    subject: 'Password Reset Token',
    html: `
      <p>You can reset your password using the token below:</p>
      <p><b>${ResetToken}</b></p>
      <p>If you didn't request this token, please ignore this email and don't share the token. The token will expire in 15 minutes.</p>
    `,
  };

  try {
    await transporter.sendMail(message);
    return { done: true };
  } catch (error) {
    console.error(error);
    return { done: false, message: error.message };
  }
};

module.exports = { sendResetLink, verifyConnection };
