const router = require('express').Router()

const { getProducts, createProducts } = require('../controller/productController')

router.post('/create', createProducts) 
router.get('/', getProducts) 
// router.get('/:id', getSingleProduct)

module.exports = router
