
const express = require("express")

const Question = require('../controllers/Question')
const Answer = require('../controllers/Answer')

const Router = express.Router()

Router.post('/', Question.post)
Router.get('/:id', Question.get)
Router.post('/:id', Answer.post)

module.exports = Router