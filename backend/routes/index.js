const express = require('express')
const urlRoutes = require('./urlRoutes')
const analyticRoute = require('./analyticRoute')

const router = express.Router()

router.use('/url', urlRoutes)
router.use('/analytic', analyticRoute)

module.exports = router