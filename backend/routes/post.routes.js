const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postController.getPosts);

router.get("/:_id", postController.getOnePost);

router.post("/new", postController.addPost);

router.delete("/:_id", postController.deleteOnePost);

router.post("/edit/:_id", postController.editPost);

module.exports = router;
