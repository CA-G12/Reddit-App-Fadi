const notFoundError = (req, res, next) => {
  res.status(404).json('Not Found Error');
};

module.exports = notFoundError;
