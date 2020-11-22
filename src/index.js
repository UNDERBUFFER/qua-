
const express = require('express')
const MainRouter = require('./routers/Main')
const mongoose = require("mongoose")
const path = require('path')

const app = express()
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
const MONGOOSE_SETTINGS = {
    poolSize: 10, 
    bufferMaxEntries: 0, 
    reconnectTries: 5000, 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

app.set('views', path.join(__dirname, '/views'))
app.use('/static', express.static( path.join(__dirname, '/public') ))
app.use('/', MainRouter)

mongoose.connect(MONGO_CONNECTION_STRING, MONGOOSE_SETTINGS, (error) => {
    if (error) console.error(error)
    else app.listen(3000, () => {
        console.log("Server is waiting for a connection...")
    })
})