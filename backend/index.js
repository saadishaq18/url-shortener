const express = require('express')
const mongoose = require('mongoose')
const {handleConnectToDb} = require('./config/dbConn')
const Route = require('./routes/index')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8001

const dbUrl = `mongodb://localhost:27017/${process.env.DATABASE}`
handleConnectToDb(dbUrl).then(
    ()=>{
        console.log("Database Connected")
    }
)
app.use(express.json())
app.use('/api', Route)


app.listen(port, ()=>{
    console.log(`Server is running on port no ${port}`)
})