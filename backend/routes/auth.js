const express = require('express')
const router  = express.Router();
const signUp = require('../controllers/auth/signUp')
const signIn = require('../controllers/auth/signIn') 
const { signout } = require('../controllers/auth/signOut');
const requireLogin = require('../middlewares/requireLogin');

router.get('/' , requireLogin  ,(req, res) => {
    res.send("hello")
})

router.post('/signup' , signUp )
router.post('/signin' , signIn )
router.post('/signout' , signout )

module.exports = router;