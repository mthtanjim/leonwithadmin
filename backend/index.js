const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path");
const { uploadImg } = require('./controller/teaController');

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT


const app = express(); 
app.use(express.json())


//router use
app.use('/products/', require('./Routes/productRoutes'))
app.use('/hubaddress/', require('./Routes/hubAddRoute'))
//just for testing routes
app.use('/tea', require("./Routes/teaRoutes"))
//for image
app.use('/uploads', express.static('./uploads'))


mongoose
    .connect(mongoString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
    .then(() => console.log("connection Successful"))
    .catch((err) => console.log(err))

function errorHandler(err, req, res, next) {
    if (res.headerSend) {
        return next(err)
    } res.status(500).json({ error: err})
}

app.listen(PORT, (req, res) => {
    console.log(`server listening to port ${PORT}`)
})

