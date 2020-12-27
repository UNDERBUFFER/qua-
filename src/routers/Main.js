
const express = require("express")
const Main = require('../controllers/Main')

const Router = express.Router()

Router.get('/', Main.get)

module.exports = Router
