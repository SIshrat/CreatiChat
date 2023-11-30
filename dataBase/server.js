const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log('Here')
    res.sendStatus(500)
    res.send("Hi")
    res.render("index", {text: "World"})
})

const userRouter = require('./routes/users')

//turn on routes for users and listens
app.use('/users', userRouter)

const port = 3000;
app.listen(post);

console.log("Server running on: " + port)
