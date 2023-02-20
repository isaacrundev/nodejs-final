const Note = require("../model/Note");

const createController = async (req, res, next) => {
  const createPostService = await Note.create(req.body);
  return res.json(createPostService);
};

const readController = async (req, res, next) => {
  const readPostService = await Note.find();
  return res.json(readPostService);
};

const updateController = () => {};

const deleteController = () => {};

module.exports = {
  createController,
  readController,
  updateController,
  deleteController,
};
