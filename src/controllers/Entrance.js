
const Auth = require('./Auth')

class Entrance extends Auth {
    static post(request, response) {
        console.log(request.body)
        response.send('hi')
    }
}

module.exports = Entrance
