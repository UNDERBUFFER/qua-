
const Auth = require('./Auth')

class Registration extends Auth {
    static post(request, response) {
        console.log(request.body)
        response.send('hi')
    }
}

module.exports = Registration
