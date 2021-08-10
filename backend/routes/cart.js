const express = require('express');
const addToCart = require('../controllers/cart/addToCart');
const router  = express.Router();

router.put('/addToCart' , addToCart )

module.exports = router;