const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String, 
        reuqired: true,
    }, 
    description: {
        type: String, 
        reuqired: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = productSchema