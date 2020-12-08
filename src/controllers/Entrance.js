
const { authenticate, login } = require('../utils/auth')
const Auth = require('./Auth')

class Entrance extends Auth {
    static post(request, response) {
        console.log(request.body)
        const promise = authenticate(request.body.email, request.body.password)
        promise.then(user => {
            console.log('ok')
            login(request, response, user)
            response.send('ok')
        })
        promise.catch(error => {
            console.log('fff')
            console.log(error)
            response.send(error)
        })
    }
}

module.exports = Entrance
