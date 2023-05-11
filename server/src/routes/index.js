const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const noteController = require("../controllers/note_controller");

router.post("/auth/login", authController.loginController);
router.post("/auth/signup", authController.signUpController);

router.get("/post/all", noteController.readController);
router.post("/post/create", noteController.createController);
router.put("/post/:postId/update", noteController.updateController);
router.post("/post/:postId/delete", noteController.deleteController);

module.exports = router;
