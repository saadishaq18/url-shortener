const express = require('express')
const urlRoutes = require('./urlRoutes')
const analyticRoute = require('./analyticRoute')
const userRoute = require('./authRoute')

const router = express.Router()

router.use('/url', urlRoutes)
router.use('/analytic', analyticRoute)
router.use('/auth', userRoute)

module.exports = router