const express = require("express")
const router = express.Router()
const uploadImg = require('../controller/teaController')


const teaController = require("../controller/teaController")
//  {newTea, getAllTea} = require(.....)

router.get("/", teaController.getAllTea)
router.post("/", teaController.uploadImg, teaController.newTea)

router.get('/:name', teaController.getOneTea)
router.post('/:name', teaController.newComment)
router.delete('/:name', teaController.deleteOneTea)

module.exports = router

