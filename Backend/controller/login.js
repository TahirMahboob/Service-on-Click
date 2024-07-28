const httpStatus = require('http-status');
const { UserModel, RefreshTokens } = require('../modals');
const { sendResetLink, verifyConnection } = require('../services/mailService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const secret = process.env?.JWT_SECRET_KEY;

const login = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (email && password) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && isMatch) {
          // Generate JWT Token
          const refreshToken = jwt.sign(
            { userID: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '200d' }
          );
          const token = jwt.sign(
            { userID: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5d' }
          );
          await RefreshTokens.create({ token: refreshToken });
          user.password = '';
          res.send({
            user: user,
            status: 'success',
            message: 'Login Success',
            token: token,
            refreshToken: refreshToken,
          });
        } else {
          res.send({
            status: 'failed',
            message: 'Email or Password is not Valid',
          });
        }
      } else {
        res.status(400).send({
          status: 'failed',
          message: 'You are not a Registered User',
        });
      }
    } else {
      res.send({ status: 'failed', message: 'All Fields are Required' });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 'failed', message: 'Unable to Login' });
  }
};
const logOut = async (req, res) => {
  const token = req.body.token;
  console.log(token);
  try {
    const deleteResults = await RefreshTokens.deleteOne({ token: token });
    if (deleteResults.deletedCount != 0) res.send({ done: true });
    else res.send({ done: false, message: 'Invalid Request' });
  } catch (error) {
    res.send({ done: false, message: parseMongoError(error) });
  }
};
const forgotPasswordService = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user)
      res
        .status(httpStatus.EXPECTATION_FAILED)
        .send({ done: false, message: 'No such user exists' });
    else {
      console.log(1);
      const result = await sendResetLink(user?.email);
      res.status(httpStatus.CREATED).send({ done: true });
    }
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ done: false, message: 'ERROR' });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  if (token && password) {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    if (!payload)
      res.status(httpStatus.EXPECTATION_FAILED).send('Invalid token');
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const userFound = await UserModel.updateOne(
      { email: payload?.email },
      { $set: { password: hashPassword } }
    );
    if (userFound.matchedCount == 0)
      res.status(httpStatus.EXPECTATION_FAILED).send('Invalid token');
    else res.status(httpStatus.OK).send('Password updated successfully');
  } else {
    res.status(httpStatus.BAD_REQUEST).send('Invalid request');
  }
};

module.exports = { login, logOut, forgotPasswordService, resetPassword };
