const router = require("express").Router();
const authController = require("../controllers/auth_controller");

router.post("/auth/login", authController.loginController);
router.post("/auth/signup", authController.signUpController);
router.get("/auth/checktoken");

module.exports = router;
