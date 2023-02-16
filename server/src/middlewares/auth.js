const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const User = require("../model/User");
const jwtSecret = require("../config/config").jwtSecret;

const signUp = async (data) => {
  const { username, email } = data;
  let getUser = await User.findOne({ username });
  let getEmail = await User.findOne({ email });
  if (getUser) {
    throw new Error("Username exists");
  }
  if (getEmail) {
    throw new Error("Email exists");
  }
  getUser = new User(data);

  const token = JWT.sign({ id: getUser._id }, jwtSecret);

  await getUser.save();

  return (data = {
    userId: getUser._id,
    username: getUser.username,
    email: getUser.email,
    token,
  });
};

const login = async (email, password) => {
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error(`Email address doesn't exist`);
  }
  const isValid = await bcrypt.compare(password, user.password);

  const token = JWT.sign({ id: user._id }, jwtSecret);

  if (isValid) {
    return (data = {
      userId: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } else {
    throw new Error(`Incorrect email/password`);
  }
};

module.exports = { signUp, login };
