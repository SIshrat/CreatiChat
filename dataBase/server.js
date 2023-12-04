const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const users = require ('./routes/users');
const cors = require('cors');
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

// Set up routes for users and posts
app.use('/users', userRouter);
app.use('/post', postRouter);

// Set up the MongoDB connection
// mongoose.connect("mongodb+srv://JoeyWin:tacocat@creatichatdatabase.jb2ovf7.mongodb.net/?retryWrites=true&w=majority");
// Sishrat's MongoDB connection
mongoose.set('strictQuery', false);
const conn_str = "mongodb+srv://sishrat:si01237uga@cluster0.ynnnmas.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(conn_str)
.then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});

// Check for successful connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.set("view engine", "ejs");

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

