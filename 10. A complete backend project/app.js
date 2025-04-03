const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectToDb = require("./config/mongoose-connection");
const ownerRouter = require("./routes/ownerRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
require("dotenv").config();
const responseHandler = require("./utils/response-handler");

const app = express();
const port = process.env.PORT || 3000;
connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

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
