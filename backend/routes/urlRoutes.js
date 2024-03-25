const express = require('express')
const {handleGenerateNewShortUrl, handleGetUrl} = require('../controller/urlController')

const router = express.Router()


router.post('/', handleGenerateNewShortUrl)
router.get('/:id', handleGetUrl)

module.exports = router