const router = require("express").Router();
const authController = require("../controllers/auth_controller");
const noteController = require("../controllers/note_controller");

router.post("/auth/login", authController.loginController);
router.post("/auth/signup", authController.signUpController);

router.get("/post/all", noteController.readController);
router.post("/post/create", noteController.createController);
router.put("/post/:postId/update", noteController.updateController);
router.delete("/post/:postId/delete", noteController.deleteController);

router.get("/dummy", (res) => res.json({ greeting: "Aloha" }).status(200));

module.exports = router;
