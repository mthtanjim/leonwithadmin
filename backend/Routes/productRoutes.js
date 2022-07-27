const router = require('express').Router()

const productController = require('../controller/productController')

router.post('/', productController.uploadProducts, productController.createProducts) 
router.put('/:id', productController.uploadProducts, productController.updateProducts) 
router.get('/', productController.getAllProducts)
router.get("/:title", productController.getOneProduct)
// router.get('/', getProducts) 

module.exports = router