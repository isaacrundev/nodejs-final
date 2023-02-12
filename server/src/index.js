require("dotenv").config();
require("express-async-errors");

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const http = require("http").Server(app);

require("./utils/socket");
app.use(cors());

app.get("/api", (_, res) =>
  res.json({ response: "=Health check=" }).status(200)
);

app.use((req, res, next) => {
  const err = new Error("404 not found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message });
});

const PORT = process.env.PORT;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
