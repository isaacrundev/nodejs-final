const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const User = require("../model/User");
const config = require("../config/config");

const signUp = async (data) => {
  const { username, email, password } = data;
  let getUser = await User.findOne({ username });
  let getEmail = await User.findOne({ email });
  if (getUser) {
    throw new Error("Username exists");
  }
  if (getEmail) {
    throw new Error("Email exists");
  }
  getUser = new User(data);

  const token = JWT.sign({ id: getUser._id }, config.jwtSecret);

  await getUser.save();

  return (data = {
    userId: getUser._id,
    username: getUser.username,
    email: getUser.email,
    token,
  });
};

const login = async () => {};

module.exports = { signUp, login };
