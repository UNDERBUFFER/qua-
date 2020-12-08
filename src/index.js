
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require("mongoose")
const path = require('path')

const MainRouter = require('./routers/Main')
const AuthRouter = require('./routers/Auth')

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
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/static', express.static( path.join(__dirname, '/public') ))
app.use('/auth', AuthRouter)
app.use('/main', MainRouter)
app.use('/', MainRouter)

mongoose.connect(MONGO_CONNECTION_STRING, MONGOOSE_SETTINGS, (error) => {
    if (error) console.error(error)
    else app.listen(3000, () => {
        console.log("Server is waiting for a connection...")
    })
})