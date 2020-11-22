
const express = require('express')
const MainRouter = require('./routers/Main')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, '/views'));
app.use('/', MainRouter)
app.listen(3000, () => {
    console.log("Server is waiting for a connection...")
})
