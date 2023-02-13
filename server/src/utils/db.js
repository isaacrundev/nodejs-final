require("dotenv").config();
const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGODB_URL);

connect
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
