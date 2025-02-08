import { SuccessApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/async-handler.js";

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new SuccessApiResponse(200, "OK", "Health check passed"));
});

export default healthCheck;
