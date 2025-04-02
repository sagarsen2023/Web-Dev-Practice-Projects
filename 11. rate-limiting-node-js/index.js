import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const jsonFilePath = "rate-limiting-log/rateLimitLog.json";
const rateLimitingLog = {};
const MAX_REQUESTS = 5;
const TIME_WINDOW = 6000;

const initializeRateLimit = (req, res, next) => {
  const fileExists = fs.existsSync(jsonFilePath);
  if (!fileExists) {
    fs.writeFileSync(jsonFilePath, JSON.stringify({}));
  } else {
    const logFile = fs.readFileSync(jsonFilePath, "utf-8");
    Object.assign(rateLimitingLog, JSON.parse(logFile));
  }
  next();
};

app.use(initializeRateLimit);

app.get("/", (req, res) => {
  res.send("Welcome to the test project for rate-limiting-node");
});

app.get("/set-rate-limit", (req, res) => {
  const ip = req.ip;
  const currentTimestamp = Date.now();

  if (rateLimitingLog[ip]) {
    const previousLogTimestamp = rateLimitingLog[ip].timestamp;

    if (currentTimestamp - previousLogTimestamp > TIME_WINDOW) {
      rateLimitingLog[ip].requests = 1;
      rateLimitingLog[ip].timestamp = currentTimestamp;
    } else {
      rateLimitingLog[ip].requests += 1;
    }
  } else {
    rateLimitingLog[ip] = { requests: 1, timestamp: currentTimestamp };
  }

  if (rateLimitingLog[ip].requests > MAX_REQUESTS) {
    return res.status(429).send("Too many requests. Please try again later.");
  }

  fs.writeFile(
    jsonFilePath,
    JSON.stringify(rateLimitingLog, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.send("Rate limit updated.");
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
