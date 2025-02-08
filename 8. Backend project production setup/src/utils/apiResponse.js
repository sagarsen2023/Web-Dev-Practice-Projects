class SuccessApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}

class ErrorApiResponse extends Error {
  constructor(statusCode, errors = [], message = "Error", stack = "") {
    super(message);
    this.data = null;
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { SuccessApiResponse, ErrorApiResponse };
