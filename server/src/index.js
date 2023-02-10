require("dotenv").config();

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

const PORT = process.env.PORT;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
