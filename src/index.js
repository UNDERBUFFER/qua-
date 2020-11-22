
const express = require('express')

const app = express()

app.get('/', (request, response) => response.send('hello world'))

app.listen(3000, () => {
    console.log("Server is waiting for a connection...")
})