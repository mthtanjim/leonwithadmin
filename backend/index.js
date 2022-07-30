const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path");
const { uploadImg } = require('./controller/teaController');
var bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT

const app = express(); 
app.use(cors())
app.use(express.json())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//router use
app.use('/products/', require('./Routes/productRoutes'))
app.use('/hubaddress/', require('./Routes/hubAddressRoute'))
//just for testing routes
app.use('/tea', require("./Routes/teaRoutes"))

mongoose
    .connect(mongoString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }, 
        (err) => {
            if(err) console.log(err) 
            else console.log("mongdb is connected");
           }
        )
    // .then(() => console.log("connection Successful"))
    // .catch((err) => console.log(err))

function errorHandler(err, req, res, next) {
    if (res.headerSend) {
        return next(err)
    } res.status(500).json({ error: err})
}

app.listen(PORT, (req, res) => {
    console.log(`server listening to port ${PORT}`)
})


//.env file
// DATABASE_URL = "mongodb+srv://dominnogroup:dominnO24@cluster0.2annryp.mongodb.net/leonbd?retryWrites=true&w=majority"
// PORT = 4000


