// post.js
const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

router.get('/', (req, res) => {
  const htmlSnippet = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Node.js App</title>
    </head>
    <body>
        <h1>Post Route, use /:originalPoster/:title to find the exact post, /all gets you all post and /:originalPoster/all for specified user all</h1>
        <img src="https://static.myfigurecollection.net/upload/items/1/1827254-d2893.jpg" alt="Suika Fumo">
    </body>
    </html>
  `

  // Send the HTML snippet as a response
  res.send(htmlSnippet);});
//get all the post
router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({msg: "Internal Server Error"})
  }
})
//grab each post from specific person
router.get('/:originalPoster/all', async (req, res) => {
  try {
    const originalPoster = req.params.originalPoster;

    // Assuming you have a Post model with a field originalPoster
    const posts = await Post.find({ originalPoster: originalPoster });

    if (!posts || posts.length === 0) {
      return res.status(404).json({ msg: 'No posts found for the specified user' });
    }

    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add more routes as needed
//date is already default in schema.
router.post('/create', async(req, res) => {
  try{
    const {originalPoster, title, description} = req.body;
    if(!originalPoster || !title || !description){
      return res.status(400).json({msg: "Please enter all the fields"});
    }

    // Check if a post with the same title and originalPoster already exists
    const existingPost = await Post.findOne({ originalPoster, title });
    if (existingPost) {
      return res.status(400).json({ message: "Post with the same title already exists for this poster" });
    }

    const newPost = new Post({
      originalPoster: originalPoster,
      title: title,
      description: description,
    })
    //save to database
    const savedPost = await newPost.save();
    res.json(savedPost);

  }catch(error){
    console.log("registration error")
    res.status(500).json({message: 'Internal Server Error'});
  }
})
//crud for post editing description and deleting the post
router.route('/:originalPoster/:title')
  .get(async (req, res) => {
    const originalPoster = req.params.originalPoster;
    const title = req.params.title;

    const post = await Post.findOne(({originalPoster, title}));
    if(!post) {
      return res.status(404).json({msg: 'post not found'})
    }
    res.json(post);
  })
  .put(async (req, res) => {
    const originalPoster = req.params.originalPoster;
    const title = req.params.title;

    // Assuming you have a request body with the updated description
    const { description } = req.body;

    // Use findOneAndUpdate to update the description
    const updatedPost = await Post.findOneAndUpdate(
      { originalPoster, title },
      { $set: { description } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(updatedPost);
  })
  .delete(async (req, res) => {
    const originalPoster = req.params.originalPoster;
    const title = req.params.title;

    const deletedPost = await Post.findOneAndDelete({ originalPoster, title });

    if (!deletedPost) {
        return res.status(404).json({ msg: 'Post not found' });
    }

    res.json({ msg: 'Post deleted successfully', deletedPost });
  })


module.exports = router;
