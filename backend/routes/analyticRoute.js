const express = require('express')
const {handleAnalytics} = require('../controller/analyticController')

const router = express.Router()

router.get('/:id', handleAnalytics)

module.exports = router