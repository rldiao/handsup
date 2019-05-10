const mongoose = require("mongoose");
const Post = require("../models/post.model");

const getPosts = function(req, res) {
  Post.find((err, post) => {
    if (!err) {
      res.send(post);
    } else {
      res.sendStatus(500);
    }
  });
};

const getOnePost = function(req, res) {
  Post.findOne({ _id: req.params._id }, (err, postID) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(postID);
    }
  });
};

const addPost = function(req, res) {
  const newPost = new Post(req.body);

  newPost.save((err, newPost) => {
    if (!err) {
      res.send(newPost);
    } else {
      res.sendStatus(500);
    }
  });
};

const deleteOnePost = function(req, res) {
  Post.fineOneAndDelete({ _id: req.params._id }, (err, post) => {
    if (!err) {
      res.send(post);
    } else {
      res.sendStatus(500);
    }
  });
};

module.exports = {
  getPosts,
  getOnePost,
  addPost,
  deleteOnePost
};
