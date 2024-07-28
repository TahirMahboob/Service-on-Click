const express = require('express');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env?.JWT_SECRET_KEY;

const getAuthToken = (req) => {
  const AuthHeader = req.headers.authorization;
  if (!AuthHeader) return null;
  const token = AuthHeader.split(' ', 2)[1];
  return token;
};
const auth = (role) => async (req, res, next) => {
  if (!role) role = 'user';
  const token = getAuthToken(req);
  if (!token) res.sendStatus(httpStatus.UNAUTHORIZED);
  else {
    const payload = jwt.verify(token, secret);
    if (!payload && !payload?.email && !payload?.role)
      res.sendStatus(httpStatus.UNAUTHORIZED);
    if (payload?.role != role) res.sendStatus(httpStatus.FORBIDDEN);
    else next();
  }
};

module.exports = { auth };
