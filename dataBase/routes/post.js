// post.js
const express = require('express');
const router = express.Router();
const post = require('../models/postModel')

router.get('/', (req, res) => {
  res.send('Post Route');
});
//get all the post
router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({msg: "Internal Server Error"})
  }
})

// Add more routes as needed

module.exports = router;
