var express = require('express')

var router = express.Router()

var calculatorController = require('../controllers/calculatorController')

// define routes to the correct controller here
router.get('/add', calculatorController.addNumbers)
router.get('/subtract', calculatorController.subtractNumbers)


module.exports = router