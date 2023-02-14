const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const salt = require("../config/config").salt;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

module.exports = model("User", userSchema);
