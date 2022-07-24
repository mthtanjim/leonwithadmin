const Tea = require('../models/teaModel')
const multer = require("multer")
var path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
      filename: function (req, file, cb) {
                const fileExt = path.extname(file.originalname)
                const fileName = file.originalname
                                .replace(fileExt, "")
                                .toLocaleLowerCase()
                                .split(" ")
                                .join("-" + "-")+ Date.now()
                cb(null, fileName + fileExt);
            }
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//       },
//     filename: function (req, file, cb) {
//         const fileExt = path.extname(file.originalname)
//         const fileName = file.originalname
//                         .replace(fileExt, "")
//                         .toLocaleLowerCase()
//                         .split(" ")
//                         .join("-" + "-" + Date.now())
//         cb(null, fileName + fileExt);
//     }
// });

const uploadImg = multer({storage: storage}).single('image')

//Post Tea 
const newTea = (req, res, next) => {
    //check if tea name already exists in db
    Tea.findOne({ name: req.body.name}, (err, data) => {
            
        //if tea not in db, add it
        if(!data) {
            //create a new tea object using the Tea model and req.body
            const newTea = new Tea({
                name: req.body.name,
                image: req.file.path,
                description: req.body.description,
                keywords: req.body.keywords
            })
            //save in database
            newTea.save((err, data) => {
                if(err) return res.json({Error: err})
                return res.json(data)
            })
            //if there's an error or the tea is in db, return a message
        } else {
            if(err) return res.json(`something wen wrong, try again. ${err}`)
            return res.json({message: "Tea already exists"})
        }

    })
}

//Get all tea 
const getAllTea = (req, res, next) => {
   Tea.find({}, (err, data) => {
    if(err) {
        console.log(`find all error ${err}`)
        return res.json({Error: err})
    }
        return res.json(data)
   })
}

const getOneTea = (req, res, next) => {
    let name = req.params.name

    Tea.findOne({name: name}, (err, data) =>{
        if (err || !data) {
            return res.json({message: "Tea does not exists"})
        } 
        return res.json(data)
    })
}

const newComment = (req, res) => {
    let name = req.params.name; //get the tea to add the comment in
    let newComment = req.body.comment; //get the comment
    //create a comment object to push
    const comment = {
        text: newComment,
        date: new Date()
    }
    //find the tea object
    Tea.findOne({name:name}, (err, data) => {
        if(err || !data || !newComment) {
            return res.json({message: "Tea doesn't exist."});
        }
        else {
            //add comment to comments array of the tea object
            data.comments.push(comment);
            //save changes to db
            data.save(err => {
                if (err) { 
                return res.json({message: "Comment failed to add.", error:err});
                }
                return res.json(data);
            })  
        } 
    })
  };

const deleteOneTea = (req, res, next) => {
    res.json({message: "Delete one Tea"})
}

module.exports = {
    getAllTea, 
    uploadImg,
    newTea, 
    getOneTea, 
    newComment, 
    deleteOneTea, 

}

