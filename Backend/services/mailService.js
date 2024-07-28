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
  port: 587,
  secure: true,
  auth: {
    user: emailID,
    pass: emailPassword,
  },
});

const verifyConnection = async () => {
  try {
    return transporter.verify();
  } catch (error) {
    console.error(error);
    return false;
  }
};

const sendResetLink = async (receipt) => {
  if (!verifyConnection()) return false;
  let expires = Date.now() + 15 * 60;
  const ResetToken = jwt.sign({ email: receipt }, secret, {
    expiresIn: '15 min',
  });
  let message = {
    from: emailTitle + '<' + emailID + '>',
    to: receipt,
    subject: 'Password Reset Token',
    html:
      'You can reset your password using the token: <br><b>' +
      ResetToken +
      "</b> <br>If you didn't ask for such a token, please ignore the mail and don't share the token. Token will expire in 15 minutes.",
  };
  try {
    const results = await transporter.sendMail(message);
    return { done: true };
  } catch (error) {
    console.error(error);
    return { done: false, message: parseMongoError(error) };
  }
};

module.exports = {sendResetLink, verifyConnection}