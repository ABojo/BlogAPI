const User = require('../models/User');
const catchError = require('../utils/catchError');
const bcrypt = require('bcryptjs');

exports.login = catchError(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const passIsValid = await bcrypt.compare(password, user.password);
  if (!passIsValid)
    throw new Error('You entered an incorrect username or password!');

  res.json({
    status: 'success',
    data: {
      message: 'You have successfully logged in!',
      user,
    },
  });
});

exports.register = catchError(async (req, res) => {
  const { username, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) throw new Error('Passwords do not match!');

  const hashedPass = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPass });

  res.json({
    status: 'success',
    data: {
      user,
    },
  });
});
