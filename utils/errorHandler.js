const errorHandler = (err, req, res, next) => {
  res.json({
    status: 'failure',
    data: { message: err.message },
  });
};

module.exports = errorHandler;
