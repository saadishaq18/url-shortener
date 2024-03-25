const express = require('express')
const { handleUserRegister, handleUserLogin } = require('../controller/authController')

const router = express.Router()

router.post('/register', handleUserRegister)
router.post('/login', handleUserLogin)

module.exports = router