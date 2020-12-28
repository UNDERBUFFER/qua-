
const AnswerModel = require('../models/Answer')
const Question = require('../models/Question')

class Answer {
    static post(request, response) {
        const questionId = request.params.id
        let question = null
        Question.find({ '_id': questionId }, (error, result) => {
            if (error) console.log(error)
            if (result.length > 0) question = result[0]
            else response.redirect('/')
            const answer = new AnswerModel({
                text: request.body.text,
                author: request.user,
                question
            })
            answer.save((error) => {
                if (error) console.log(error)
                response.redirect(`/question/${questionId}`)
            })
        })
    }
}

module.exports = Answer
