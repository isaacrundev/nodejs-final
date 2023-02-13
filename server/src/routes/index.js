const router = require("express").Router();
const authController = require("../controllers/auth_controller");

router.post("/auth/login");
router.post("/auth/signup", authController.signUpController);

module.exports = router;
