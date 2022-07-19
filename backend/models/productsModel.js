const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    catagory: {
        type: String,
        require: false
    },
    title: {
        type: String, 
        reuqired: false,
    }, 
    description: {
        type: String, 
        reuqired: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const productsSchema = mongoose.model('products', productSchema)
module.exports = productsSchema