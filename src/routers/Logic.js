
const express = require("express")

const Question = require('../controllers/Question')
const Answer = require('../controllers/Answer')
const QuestionCollection = require("../controllers/QuestionCollection")
const AnswerCollection = require("../controllers/AnswerCollection")
const AuthorInfo = require("../controllers/AuthorInfo")
const QuestionInfo = require("../controllers/QuestionInfo")

const Router = express.Router()

Router.post('/', Question.post)
Router.get('/all-questions', QuestionCollection.get)
Router.get('/:id', Question.get)
Router.get('/:id/author-info', AuthorInfo.get)
Router.get('/:id/question-info', QuestionInfo.get)
Router.post('/:id', Answer.post)
Router.get('/:id/:answerId/author-info', AuthorInfo.get)
Router.get('/:id/all-answers', AnswerCollection.get)

module.exports = Router