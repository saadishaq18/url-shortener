const express = require('express')
const mongoose = require('mongoose')
const {handleConnectToDb} = require('./config/dbConn')

const app = express()
const port = process.env.PORT || 8001
const dbUrl = `mongodb://localhost:27017/${process.env.DATABASE}`
handleConnectToDb(dbUrl).then(
    ()=>{
        console.log("Database Connected")
    }
)


app.listen(port, ()=>{
    console.log(`Server is running on port no ${port}`)
})