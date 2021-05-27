exports.login = catchError(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const passIsValid = await bcrypt.compare(password, user.password);
  if (!passIsValid)
    throw new Error('You entered an incorrect username or password!');

  const token = await jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET
  );

  res.json({
    status: 'success',
    data: {
      token,
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
