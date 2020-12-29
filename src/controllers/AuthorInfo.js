
const User = require("../models//User")
const Question = require("../models/Question")

class AuthorInfo {
    static get(request, response) {
        const questionId = request.params.id
        Question.find( {'_id': questionId}, (error, result) => {
            if (error) console.log(error)
            if (result.length == 0) response.json({ 'error': 'empty id' })
            else User.find( {'_id': result[0].author}, (error, result) => {
                if (error) console.log(error)
                response.json(result[0])
            } )
        } )
    }
}

module.exports = AuthorInfo
