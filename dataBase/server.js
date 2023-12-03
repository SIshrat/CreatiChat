const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(logger)

//default route
app.get('/', (req, res) => {
  const htmlSnippet = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Node.js App</title>
    </head>
    <body>
        <h1>Hiyo, use /post or /users to then access the other routes</h1>
        <img src="https://i.ytimg.com/vi/a2BcjMCYFq0/maxresdefault.jpg" "nihahaha">
    </body>
    </html>
  `;

  // Send the HTML snippet as a response
  res.send(htmlSnippet);
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
