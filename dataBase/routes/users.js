const express = require('express');
const router = express.Router();

// Middleware for handling userId parameter
router.param('userId', (req, res, next, userId) => {
    // You can use userId for specific processing if needed
    console.log(`User ID: ${userId}`);
    next();
});

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
router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.send('User New Form');
});

// Create User  Not Done Yet.
router.post('/',async (req, res) => {
    res.send('Create user');

    const {username, password} = req.body;

    try{
        //hash the password
        const hashedPassword = await bcrypted.hash(password, 10)

        //create user with hashed password
        const newUser = new User({
            //temporary
            userId: Math.random(0-10000),
            username: username,
            password: hashedPassword,
        });

        //save the user to database
        await newUser.save();


    }
    catch(error){
        console.log("registration error")
        res.status(500).json({message: 'Internal Server Error'});
    }

});

// User CRUD operations
router.route('/:userId')
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.userId}`);
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.userId}`);
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.userId}`);
    });

// Username CRUD
router.route('/:userId/username/:username')
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
router.route('/:userId/password/:password')
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
router.route('/:userId/avatar/:avatar')
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
