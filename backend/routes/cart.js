const express = require('express');
const addToCart = require('../controllers/cart/addToCart');
const cartProductDetails = require('../controllers/cart/cartProductDetails');
const router  = express.Router();

router.put('/addToCart' , addToCart )
router.post('/cartproductdetails' , cartProductDetails )

module.exports = router;