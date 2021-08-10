const mongoose = require('mongoose')
const Product = mongoose.model('Product') 

const cartProductDetails = async (req,res) => {
    Product.find({_id : {$in : req.body.cartId}})
    .exec((err, result) => {
        if(err){
            return res.status(206).json({error:err})
        }
        else{
            res.status(200).json(result)
        }
    })
}

module.exports = cartProductDetails