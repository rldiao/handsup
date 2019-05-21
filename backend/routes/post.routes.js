const express = require("express");
const postController = require("../controllers/post.controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", [auth.withAuth, postController.getPosts]);

router.get("/:_id", [auth.withAuth, postController.getOnePost]);

router.post("/new", [auth.withAuth, postController.addPost]);

router.delete("/:_id", [auth.withAuth, postController.deleteOnePost]);

router.post("/edit/:_id", [auth.withAuth, postController.editPost]);

module.exports = router;
