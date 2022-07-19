const mongoose = require('mongoose')

const hubAddressModel = mongoose.Schema({
    district: {
        type: String,
        require: true,
    },
    phone: {
        type: Number, 
        reuqired: true,
    }, 
    address: {
        type: String, 
        reuqired: true,
    }
})

const hubAddress = mongoose.model('hubAddress', hubAddressModel)
module.exports = hubAddress

