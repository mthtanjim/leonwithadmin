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



//test image post
app.get("/uplaodphoto",(req,res)=>{
    res.render("index");
})
 
app.post("/uploadphoto",uploadImg(),(req,res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };
    imageModel.create(final_img,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.img.Buffer);
            console.log("Saved To database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        }
    })
})


//test image post ends



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


