// post.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Post Route');
});

// Add more routes as needed

module.exports = router;
