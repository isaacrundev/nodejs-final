require("dotenv").config();
require("express-async-errors");
require("./utils/db");
require("./utils/socket");

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const http = require("http").Server(app);
const PORT = require("./config/config").PORT;

app.use(express.json());
app.use(cors());

app.get("/check", (_, res) =>
  res.json({ response: "=Health check=" }).status(200)
);

app.use("/api", require("./routes/index"));

app.use((req, res, next) => {
  const err = new Error("404 not found!");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({ error: error.message });
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
