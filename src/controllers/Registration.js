
const Auth = require('./Auth')
const User = require('../models/User')
const { login } = require('../utils/auth')

class Registration extends Auth {
    static post(request, response) {
        const user = new User(request.body)
        user.save((error) => {
            if (error) response.send(error)
            else {
                login(request, response, user)
                response.json({
                    status: 'ok'
                })
            }
        })
    }
}

module.exports = Registration
