
const express = require("express")

const Auth = require('../controllers/Auth')
const Entrance = require('../controllers/Entrance')
const Logout = require('../controllers/Logout')
const Registration = require('../controllers/Registration')
const User = require('../controllers/User')

const Router = express.Router()

Router.get('/', Auth.get)
Router.get('/user', User.get)
Router.get('/logout', Logout.get)
Router.post('/registration', Registration.post)
Router.post('/entrance', Entrance.post)

module.exports = Router
