const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const product = async (req, res) => {
    const {id} = req.params
    const product = await Product.findOne({_id : id})
    res.status(200).json(product)
}


module.exports = product