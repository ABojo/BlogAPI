const User = require('../models/User');
const catchError = require('../utils/catchError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.protect = catchError(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const user = await jwt.verify(token, process.env.JWT_SECRET);

  req.currentUser = user;
  next();
});
