const router = require('express').Router()

const { getHubAddress, createAddress, updateHubAddress, deleteHubAddress } = require('../controller/hubAddressController')

router.post('/', createAddress) 
router.get('/', getHubAddress) 
router.put('/:id', updateHubAddress)
router.delete('/:id',deleteHubAddress)


// router.get('/:id', getSingleProduct)

module.exports = router
