const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(logger)

app.get("/", (req, res) => {
  console.log('Here');
  // Send a 500 status (Internal Server Error)
  res.sendStatus(500);
});

// Set up routes for users and posts
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');

app.use('/users', userRouter);
app.use('/post', postRouter);

//middleware
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}


const port = 3000;
app.listen(port, () => {
  console.log("Server running on: " + port);
});
