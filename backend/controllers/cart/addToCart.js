const mongoose = require('mongoose')
const Product = mongoose.model('Product') 
const User = mongoose.model('User') 

const addToCart = (req,res) => {
    User.findByIdAndUpdate(req.body._id,{
        $push:{cart:req.body.productId}
    },{new:true})
    .exec((err, result) => {
        if(err){
            return res.status(206).json({error:err})
        }
        else{
            res.status(200).json(result)
        }
    })
} 

module.exports = addToCart