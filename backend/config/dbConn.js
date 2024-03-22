const mongoose = require('mongoose')

const handleConnectToDb = async (url) =>{
    return await mongoose.connect(url)
}

module.exports = {
    handleConnectToDb
}