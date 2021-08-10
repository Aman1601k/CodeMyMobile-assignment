const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const getproducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}


module.exports = getproducts