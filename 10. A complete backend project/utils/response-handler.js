class ResponseHandler {
  successResponse({ statusCode, data, message }) {
    const response = {
      error: false,
      status: true,
      message: message || null,
      statusCode: statusCode || 200,
      timeStamp: new Date().toISOString(),
      data: data || null,
    };
    return response;
  }

  errorResponse({ statusCode, message }) {
    const response = {
      error: true,
      status: false,
      message: message || "An error occurred",
      statusCode: statusCode || 500,
      timeStamp: new Date().toISOString(),
      data: null,
    };
    return response;
  }
}

module.exports = new ResponseHandler();
