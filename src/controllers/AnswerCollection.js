
const Answer = require('../models/Answer')
const Question = require('../models/Question')


class AnswerCollection {
    static get(request, response) {
        Question.find({ '_id': request.params.id }, (error, result) => {
            if (error) console.log(error)
            if (result.length == 0) response.json([])
            else {
                Answer.find({ 'question': result[0] }, (error, result) => {
                    if (error) console.log(error)
                    response.json(result)
                })
            }
        })
    }
}

module.exports = AnswerCollection
