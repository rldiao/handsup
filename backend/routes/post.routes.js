const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postController.getPosts);

router.post("/new", postController.addPost);

router.delete("/:_id", postController.deleteOnePost);

module.exports = router;
