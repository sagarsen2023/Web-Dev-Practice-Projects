import app from "./app.js";
import dotenv from "dotenv";
import connectToDb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8080;

connectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch(() => {
    console.error("Mongodb connection error at src/index.js");
  });
