const express = require('express');
const bcryptjs = require('bcryptjs')
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../models/userModel");


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

//other routes
//get all users
router.get('/'), (req, res) => {
    res.send('user route')
}

router.get('/all', (req, res) => {
    res.send('User List');
});

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

// Username CRUD
router.route('/:username')
    .get((req, res) => {
        res.send(`Get Username with ID ${req.params.username}`);
    })
    .put((req, res) => {
        res.send(`Update Username with ID ${req.params.username}`);
    })
    .delete((req, res) => {
        res.send(`Delete Username with ID ${req.params.username}`);
    });

// Password CRUD
router.route('/:username/password/:password')
    .get((req, res) => {
        res.send(`Get Password with ID ${req.params.password}`);
    })
    .put((req, res) => {
        res.send(`Update Password with ID ${req.params.password}`);
    })
    .delete((req, res) => {
        res.send(`Delete Password with ID ${req.params.password}`);
    });

// Avatar CRUD
router.route('/:username/avatar/:avatar')
    .get((req, res) => {
        res.send(`Get Avatar with ID ${req.params.avatar}`);
    })
    .put((req, res) => {
        res.send(`Update Avatar with ID ${req.params.avatar}`);
    })
    .delete((req, res) => {
        res.send(`Delete Avatar with ID ${req.params.avatar}`);
    });

module.exports = router;
