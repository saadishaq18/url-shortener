const express = require('express')
const {handleGenerateNewShortUrl} = require('../controller/urlController')

const router = express.Router()


router.post('/', handleGenerateNewShortUrl)

module.exports = router