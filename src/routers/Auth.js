
const express = require("express")
const Auth = require('../controllers/Auth')

const Router = express.Router()

Router.get('/', Auth.get)
Router.post('/', Auth.post)

module.exports = Router
