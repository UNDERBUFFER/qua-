
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require("mongoose")
const path = require('path')
const http = require("http")
const WebSocket = require('./utils/WebSocketServer')

const AuthRouter = require('./routers/Auth')
const ChatRouter = require('./routers/Chat')
const MainRouter = require('./routers/Main')
const LogicRouter = require('./routers/Logic')
const MIDDLEWARES = require('./middlewares/main')
const settings = require('./settings')


const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
MIDDLEWARES.forEach(middleware => app.use(middleware))


app.use('/static', express.static( path.join(__dirname, '/public') ))
app.use('/auth', AuthRouter)
app.use('/chat', ChatRouter)
app.use('/main', MainRouter)
app.use('/question', LogicRouter)
app.use('/', MainRouter)


const server = http.createServer(app)

mongoose.connect(settings.MONGO_CONNECTION_STRING, settings.MONGOOSE_SETTINGS, (error) => {
    if (error) console.error(error)
    else server.listen(3000, () => {
        console.log("Server is waiting for a connection...")
    })
})

new WebSocket( { server, path: '/chat' } ).main()

