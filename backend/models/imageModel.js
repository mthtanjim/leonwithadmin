const mongoose = require("mongoose")

const ImageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = ImageModel = mongoose.model('imageModel', ImageSchema)