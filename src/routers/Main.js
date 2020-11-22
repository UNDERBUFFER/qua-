
const express = require("express")
const Main = require('../controllers/Main')

const Router = express.Router()

Router.get('/', Main.get)
Router.post('/', Main.post)

module.exports = Router
