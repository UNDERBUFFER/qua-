
const { authenticate, login } = require('../utils/auth')
const Auth = require('./Auth')

class Entrance extends Auth {
    static post(request, response) {
        console.log(request.body)
        const promise = authenticate(request.body.email, request.body.password)
        promise.then(user => {
            login(request, response, user)
            response.json({
                status: 'ok'
            })
        })
        promise.catch(error => {
            response.send(error)
        })
    }
}

module.exports = Entrance
