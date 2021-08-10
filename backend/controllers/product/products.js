const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const products = (req, res) => {
    const {title,price,description,image} = req.body
    try{
        if(!title || !price || !description || !image){
        return res.status(422).json({error: 'Please fill all the fields'})
    }
    const product = new Product({
        title,
        price,
        description,
        image
    }).save()
    res.status(201).json(product)
    }
    catch(err){
        res.status(500).json({error: "Internal server error"})
    }
}


module.exports = products