
const QuestionModel = require('../models/Question')

class Question {
    static get(request, response) {
        response.render('question/main.hbs')
    }
    static post(request, response) {
        console.log(request.body)
        response.send('ok')
    }
}

module.exports = Question
