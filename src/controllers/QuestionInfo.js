
const Question = require('../models/Question')


class QuestionInfo {
    static get(request, response) {
        Question.find( {'_id': request.params.id}, (error, result) => {
            if (error) console.log(error)
            if (result.length == 0) response.json({ 'error': 'empty id' })
            else response.json(result[0])
        } )
    }
}

module.exports = QuestionInfo
