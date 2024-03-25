const jwt = require('jsonwebtoken')

const setUser = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    }
    const token = jwt.sign(payload, process.env.SECRET)
    console.log("Token",token)
    res.cookie(token)
}

const getUser = (token) => {

}

module.exports = {
    setUser,
    getUser
}