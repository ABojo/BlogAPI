const User = require('../models/User');
const catchError = require('../utils/catchError');
const bcrypt = require('bcryptjs');

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
