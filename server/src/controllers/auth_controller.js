const auth = require("../middlewares/auth");

const signUpController = async (req, res, next) => {
  const signUpService = await auth.signUp(req.body);
  return res.json(signUpService);
};

module.exports = { signUpController };
