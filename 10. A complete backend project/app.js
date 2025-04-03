const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectToDb = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const responseHandler = require("./utils/response-handler");
const envKeys = require("./constants/env-keys");

const app = express();
const port = envKeys.serverPort;
connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/owner", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  const response = responseHandler.successResponse({
    statusCode: 200,
    message: "Welcome to the Scatch API!",
  });
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is up at http://localhost:${port}`);
});
