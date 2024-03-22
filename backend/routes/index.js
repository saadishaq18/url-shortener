const express = require('express')
const urlRoutes = require('./urlRoutes')

const router = express.Router()

router.use('/url', urlRoutes)

module.exports = router