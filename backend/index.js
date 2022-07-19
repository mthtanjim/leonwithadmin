const express = require('express')
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")

require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT


const app = express(); 
app.use(express.json())


//router use
app.use('/products/', require('./Routes/productRoutes'))
app.use('/hubaddress/', require('./Routes/hubAddRoute'))

//for products upload *****Start*******
const UPLOAD_FOLDER = "./uploads"

var upload = multer({
    dest: UPLOAD_FOLDER, 
    limits: {
        fileSize: 1000000, 
    }, 
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"||
            file.mimetype === "image/jpeg" 
        ) {
            cd(null, true)
        } else {
            cb(new Error("only jpg, png jpeg allowed"))
        }
    }
})

app.post('/image', upload.single("avater"), (req, res) => {
    res.send("file Uploaded Success")
})

//for products upload *****Ends*******

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


