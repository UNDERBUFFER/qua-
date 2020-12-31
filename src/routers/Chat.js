
const express = require("express")
const Chat = require('../controllers/Chat')

const Router = express.Router()

Router.get('/', Chat.get)

module.exports = Router
