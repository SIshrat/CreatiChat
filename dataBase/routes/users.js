const express = require('express');
const bcryptjs = require('bcryptjs')
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../models/userModel");
const User = require('../models/userModel');


// Middleware for handling username parameter

// Middleware for handling username parameter
router.param('username', (req, res, next, username) => {
    // You can use username for specific processing if needed
    console.log(`Username: ${username}`);
    next();
});

// Middleware for handling password parameter
router.param('password', (req, res, next, password) => {
    // You can use password for specific processing if needed
    console.log(`Password: ${password}`);
    next();
});

// Middleware for handling avatar parameter
router.param('avatar', (req, res, next, avatar) => {
    // You can use avatar for specific processing if needed
    console.log(`Avatar: ${avatar}`);
    next();
});

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
          <h1>User Route, use /:originalPoster/:title to find the exact post, /all gets you all post and /:originalPoster/all for specified user all</h1>
          <img src="https://i.redd.it/j8e7qtqy2s191.jpg" alt="Tenshi Fumo" width= "800px" height= "500">
      </body>
      </html>
    `
    // Send the HTML snippet as a response
    res.send(htmlSnippet);
});
router.get('/all', (req, res) => {
    res.send('User List');
});
//create new Post
router.post('/signup',async (req, res) => {
    try{
        const {username, password, avatar} = req.body;
        if(!username || !password || avatar){
            return res.status(400).json({msg: "Please enter all the fields"});
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
        const savedUser = await newUser.save();
        res.json(savedUser);

    }
    catch(error){
        console.log("registration error")
        res.status(500).json({message: 'Internal Server Error'});
    }
});
//login user
router.post('/login', async (req,res) =>{
    try {
        const{username, password} = req.body;
        if(!username || !password) {
            return res.status(400).json({msg: "please fill out the fields"});
        }
        const user = await User.findOne({username});
        if(!user) {
            return res
                    .status(400)
                    .send({msg: "user that name does not exist"})
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
            return res.status(400).send({msg: "password is wrong"})
        }
        const token = jwt.sign({id: user._id}, "passwordKey");
        res.json({token, user: {id: user._id, username: user.username}});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
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

// Username CRUD
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
router.route('/:username/avatar/:avatar')
    .get(async (req, res) => {
        try {
            // Retrieve avatar by username from the database
            const avatar = await Avatar.findOne({
                username: req.params.username
            });

            if (!avatar) {
                return res.status(404).json({ msg: 'Avatar not found' });
            }

            // Send the avatar details as a JSON response
            res.json(avatar);
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error' });
        }
    })

module.exports = router;
