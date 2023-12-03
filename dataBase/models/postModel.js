// postModel.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  //username associated with the post
  originalPoster: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
