const mongoose = require('mongoose')
const Product = mongoose.model('Product') 
const User = mongoose.model('User') 

const addToCart = (req,res) => {
    console.log("ddd",req.body._id)
    User.findByIdAndUpdate(req.body.productId,{
        $push:{cart:req.body._id}
    },{new:true}).then(result => {
        res.status(200).json(result)
    })
}

module.exports = addToCart