const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  authorID: String,
  autherName: String,
  createDate: String,
  content: String
});

module.exports = mongoose.model("posts", postSchema);
