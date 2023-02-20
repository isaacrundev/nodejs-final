const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const noteController = require("../controllers/note_controller");

router.post("/auth/login", authController.loginController);
router.post("/auth/signup", authController.signUpController);

router.get("/post/all", noteController.readController);
router.post("/post/create", noteController.createController);

module.exports = router;
