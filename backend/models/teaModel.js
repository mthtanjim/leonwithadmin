const mongoose = require("mongoose")

//tea schema 

const TeaSchema = new mongoose.Schema({
    name: {
        type:String,
        required: false
    },
    image: {
        type:String,
        required: true
    },
    description: String,
    keywords: String,
    newComments: [{
        text: String,
        date: {
            type: String,
            default: new Date()
        }
    }]
})

const Tea = mongoose.model("Tea", TeaSchema) //convert to model named Tea
module.exports = Tea //exports for controller use

