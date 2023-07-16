const mongoose = require('mongoose')

const productSchema =  mongoose.Schema({
    name:{
        type:String,
        require:[true, "please enter the product name"]
    },
    quantity:{
        type:Number,
        require:true,
        
    },
    price:{
        type:Number,
        require:false
    },
    image:{
        type:String,
        require:false
    },
    
        timestamps:true
    
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;