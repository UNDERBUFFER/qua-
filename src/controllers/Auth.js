
class Auth {
    static get(request, response) {
        response.render('auth/main.hbs')
    }
    static post(request, response) {
        response.send('tmp fuck you')
    }
}

module.exports = Auth
