
const AnswerModel = require('../models/Answer')

class Answer {
    static post(request, response) {
        console.log(request.body)
        response.send('ok')
    }
}

module.exports = Answer
