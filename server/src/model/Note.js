const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const noteSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Note", noteSchema);
