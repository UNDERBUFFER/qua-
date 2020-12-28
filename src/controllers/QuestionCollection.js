
const Question = require('../models/Question')


class QuestionCollection {
    static get(request, response) {
        Question.find({}, (error, result) => {
            if (error) console.log(error)
            response.json(result)
        })
    }
}

module.exports = QuestionCollection
