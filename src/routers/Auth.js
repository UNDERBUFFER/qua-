
const express = require("express")

const Auth = require('../controllers/Auth')
const Registration = require('../controllers/Registration')
const Entrance = require('../controllers/Entrance')

const Router = express.Router()

Router.get('/', Auth.get)
Router.post('/registration', Registration.post)
Router.post('/entrance', Entrance.post)

module.exports = Router
