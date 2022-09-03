class CustomizedError extends Error {
  constructor(status, msg) {
    super(msg);
    this.statusCode = status;
    this.message = msg;
  }
}

module.exports = CustomizedError;
