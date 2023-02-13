const dotenv = require("dotenv");

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  salt: process.env.SALT,
  PORT: process.env.PORT,
};
