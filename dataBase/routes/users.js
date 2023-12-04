const express = require('express');
const bcryptjs = require('bcryptjs')
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');
const auth = require('../middleware/auth');

router.use(express.json());

//root route
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
          <h1>/Users Route dont forget to add /users before all commands, use /:username to get user, /all gets you all username and /:username/avatar for specified avatar</h1>
          <img src="https://i.redd.it/j8e7qtqy2s191.jpg" alt="Tenshi Fumo" width= "800px" height= "500">
      </body>
      </html>
    `
    // Send the HTML snippet as a response
    res.send(htmlSnippet);
});
router.get('/all', async (req, res) => {
    console.log("running all")
    try {
        const userList = await User.find();
        res.json(userList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

//signup/create new user
router.post('/signup',async (req, res) => {
    try{
        console.log("running /signup")
        console.log("const activate");
        const {username, password, confirmPassword, avatar} = req.body;
        console.log("const complete");

        console.log(`username: ${username}\npassword: ${password}\n avatar: ${avatar}\n`)

        if(!username || !password || !avatar || !confirmPassword){
            return res.status(400).json({msg: "Please enter all the fields"});
        }
        if(confirmPassword !== password) {
            return res.status(400).json({msg: "Both passwords do not match"});
        }
        //check for same user in database
        const existingUser = await User.findOne({username})
        if(existingUser){
            return res
                .status(400)
                .json({msg: "User with same username already exist"})
        }
        //hash the password
        const hashedPassword = await bcryptjs.hash(password, 8)

        //create user with hashed password
        const newUser = new User({
            username: username,
            password: hashedPassword,
            avatar: avatar,
        });
        //save the user to database
        console.log(newUser)
        const savedUser = newUser.save();
        res.json(savedUser);
    }
    catch(error){
        console.log("registration error")
        console.log(error)
        res.status(500).json({message: 'Internal Server Error'});
    }
});

//login user
router.post('/login', async (req,res) =>{
    try {
        console.log("running /login")
        const{username, password} = req.body;
        console.log(username + ": " + password)
        if(!username || !password) {
            return res.status(400).json({msg: "please fill out the fields"});
        }
        const user = await User.findOne({username});
        if(!user) {
            return res
                    .status(400)
                    .send({msg: "username does not exist"})
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
            return res.status(400).send({msg: "Incorrect password"})
        }
        const token = jwt.sign({id: user._id}, "passwordKey");
        res.json({token, user: {id: user._id, username: user.username}});
        console.log("login successful");
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
// Check if token is valid
router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json( {error: err.message });
    }
});

router.get("/home", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        avatar: user.avatar,
        id: user._id,
    });
});

//get all users
router.get('/all', async (req, res) => {
    try {
        const posts = await User.find();
        res.json(posts);
      } catch (error) {
        res.status(500).json({msg: "Internal Server Error"})
      }
})

// User CRUD
router.route('/:username')
    .get(async (req, res) => {
        try {
            // Retrieve user by username from the database
            const user = await User.findOne({ username: req.params.username });

            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }
            // Send the user details as a JSON response
            res.json(user);
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    })
    .delete(async (req, res) => {
        try {
            // Delete the user by username from the database
            const deletedUser = await User.findOneAndDelete({ username: req.params.username });
            if (!deletedUser) {
                return res.status(404).json({ msg: 'User not found' });
            }

            // Send a success message along with the deleted user details
            res.json({ msg: 'User deleted successfully', deletedUser });
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    });
// Avatar CRUD
router.route('/:username/avatar/')
    .get(async (req, res) => {
        try {
            console.log("running :username/avatar")
            const username = req.params.username;
            console.log(username);
            const user = await User.findOne({username});
            if(!user) 
                return res.status(404).json({ msg: 'User not found' });
            res.json({ avatar: user.avatar });
            // // Retrieve avatar by username from the database
            // const avatar = await User.findOne({username});
            // console.log(avatar)
            // if (!avatar) {
            //     return res.status(404).json({ msg: 'Avatar not found' });
            // }

            // // Send the avatar details as a JSON response
            // res.json(avatar.avatar);
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    })

//example thingy
// Example route to test user creation
router.post('/test', async (req, res) => {
    console.log("running test");
    const userTest = new User({
      "username": "super",
      "password": "ham",
      "avatar": "https://i.ytimg.com/vi/a2BcjMCYFq0/maxresdefault.jpg"
    });
  
    try {
      const testUser = await userTest.save();
      res.json(testUser);
    } catch (error) {
      console.error("Error creating test user:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports = router;
