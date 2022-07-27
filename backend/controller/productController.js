const productsSchema = require("../models/productsModel");
const multer = require('multer')
var path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    const fileExt = path.extname(file.originalname)
    const fileName = file.originalname
                      .replace(fileExt, "")
                      .toLocaleLowerCase()
                      .split(" ")
                      .join("-"+"-") + Date.now()
        cb(null, fileName + fileExt)
  }
})

const uploadProducts = multer({storage:storage}).single('image')
//post a products
const createProducts = (req, res, next) => {
    //check if file already exist in database or not
    productsSchema.findOne({ title: req.body.title}, (err, data) => {
      //if tea not in database
      if(!data) {
        //create a new tea object using the Tea model and req.body
        const createProducts = new productsSchema({
          category: req.body.category,
          title: req.body.title,
          image: req.file.path,
          description: req.body.description,
          keyword: req.body.keyword
        })
        //save in database 
      createProducts.save((err, data) => {
        if(err) return res.json({Error: err})
        return res.json(data)
    })
  } else {
        if(err) return res.json(`something wen wrong, try again. ${err}`)
        return res.json({message: "Tea already exists"})
     }
    })
}

//update products
const updateProducts = (req, res, next) => {
  const id = req.params.id
 
  console.log('body', req.body)
 
  const title = req.body.title
  const description = req.body.description

  const updates = {
    title,
    description
  }

  if (req.file) {
    updates.image = req.file.filename
  }
  productsSchema.findOneAndUpdate(id, {
    $set: updates
  }, {
    new: true
  })
  .then(data => {
    if (!data){
      res.status(404).send({
        message: `Cannot update with id ${id}`
      })
    } else res.send({message: "Hub Address update Successfully"})
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: "Error updating Hub Address",
      
    })
  })
}

//get all products
const getAllProducts = (req, res, next) => {
  productsSchema.find({}, (err, data) => {
    if(err) {
      console.log(`find all products eror ${err}`)
      return res.json({Error: err})
    } return res.json(data)
  })
}

//get one products
const getOneProduct = (req, res, next) => {
  let title = req.params.title
    console.log('data base products details', req.params)

    productsSchema.findOne({title: title}, (err, data) => {
      if (err || !data) {
        return res.json({message: "tea docs not exists"})
      } return res.json(data)
    })
}

  module.exports = {
    uploadProducts,
    updateProducts,
    createProducts,
    getAllProducts,
    getOneProduct
  }