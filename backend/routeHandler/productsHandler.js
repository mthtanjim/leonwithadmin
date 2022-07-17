const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const productSchema = require('../models/productsModel')

//this is product model, and model name data base "Product"
//it will return promis, and we handle with then catch 
const Product = new mongoose.model("Product", productSchema)


//get all the products
router.get('/', async(req, res) => {

})

//get a product
router.get('/:id', async(req, res) => {

})

//post a product
router.post('/', async(req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save((err) => {
        if(err) {
            res.status(500).json({
                error: 'there was a server side error'
            })
        } else {
              res.status(200).json({
                message: "Product was inserteed successfully"
              })
        }
    })
})

//post multiple or all products
router.post('/all', async(req, res) => {
    
})

//put doto or Update
router.put('/:id', async(req, res) => {
    
})

//delete products
router.delete('/:id', async(req, res) => {
    
})

module.exports = router


