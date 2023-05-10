const Note = require("../model/Note");

const createController = async (req, res, next) => {
  const createPostService = await Note.create(req.body);
  return res.json(createPostService);
};

const readController = async (req, res, next) => {
  const readPostService = await Note.find();
  return res.json(readPostService);
};

const updateController = async (req, res, next) => {
  const targetId = req.params.id;
  const content = req.body.content;
  const updatePostService = await Note.findByIdAndUpdate(targetId, { content });
};

const deleteController = async (req, res, next) => {
  const deletePostService = await Note.findByIdAndDelete();
};

module.exports = {
  createController,
  readController,
  updateController,
  deleteController,
};
