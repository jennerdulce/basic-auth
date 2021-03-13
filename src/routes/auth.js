'use strict';

const express = require('express');
const verifyPassword = require('../middleware/auth/verifyPasswords.js')
const encrypt = require('../middleware/auth/encrypt.js')

const authRoute = express.Router();

authRoute.post('/signup', encrypt, signupRoute)
authRoute.post('/signin', verifyPassword, signinRoute)

function signupRoute(req, res) {
  res.status(201).json({
    status: 200,
    user: req.savedUser
  })
}

function signinRoute(req, res) {
  res.status(200).json({
    status: 200,
    login: `Login success!`,
    user: req.userInfo
  })
}


module.exports = authRoute;
