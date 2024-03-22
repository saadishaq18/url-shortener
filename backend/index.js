const express = require('express')
require('env')

const app = express()
const port = process.env.PORT || 8001

app.listen(port, ()=>{
    console.log(`Server is running on port no ${port}`)
})