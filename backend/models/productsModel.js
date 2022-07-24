const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    category: {
        type: String,
        require: false
    },
    title: {
        type: String, 
        reuqired: true,
    },
    image: {
        type: String,
        require: false 
    }, 
    description: {
        type: String, 
        reuqired: false,
    },
    keyword: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const productsSchema = mongoose.model('product', productSchema)
module.exports = productsSchema