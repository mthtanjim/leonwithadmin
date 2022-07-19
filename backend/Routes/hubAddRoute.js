const router = require('express').Router()

const { hubAddress, createAddress } = require('../controller/hubAddressController')

router.post('/create', createAddress) 
router.get('/', hubAddress) 

// router.get('/:id', getSingleProduct)

module.exports = router
