
const User = require("../models//User")
const Answer = require("../models/Answer")
const Question = require("../models/Question")

class AuthorInfo {
    static get(request, response) {
        const RightModel = request.params.answerId ? Answer : Question
        const id = request.params.answerId ? request.params.answerId : request.params.id
        RightModel.find( {'_id': id}, (error, result) => {
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
