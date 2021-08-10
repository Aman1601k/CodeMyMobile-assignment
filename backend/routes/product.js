const express = require('express');
const getproducts = require('../controllers/product/getproducts');
const product = require('../controllers/product/product');
const products = require('../controllers/product/products');
const router  = express.Router();

router.post('/products' , products )
router.get('/getproducts' , getproducts )
router.get('/product/:id' , product )

module.exports = router;