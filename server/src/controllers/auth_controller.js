const auth = require("../middlewares/auth");

const signUpController = async (req, res, next) => {
  const signUpService = await auth.signUp(req.body);
  return res.json(signUpService);
};

const loginController = async (req, res, next) => {
  const { username, password } = req.body;
  const loginService = await auth.login(username, password);
  return res.json(loginService);
};

module.exports = { signUpController, loginController };
