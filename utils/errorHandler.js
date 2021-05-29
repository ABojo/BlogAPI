const errorHandler = (err, req, res, next) => {
  let msg = err.message;

  if (msg === 'jwt malformed' || msg === 'invalid signature') {
    msg = 'Sorry, please login again!';
  }

  res.json({
    status: 'failure',
    data: { message: msg },
  });
};

module.exports = errorHandler;
