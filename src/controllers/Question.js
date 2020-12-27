
const QuestionModel = require('../models/Question')

class Question {
    static get(request, response) {
        response.render('question/main.hbs')
    }
    static post(request, response) {
        request.body.author = request.user
        const question = new QuestionModel(request.body)
        question.save((error) => {
            if (error) {
                console.log(error)
                response.redirect('/')
            }
            else response.redirect(`/question/${question.id}/`)
        })
    }
}

module.exports = Question
