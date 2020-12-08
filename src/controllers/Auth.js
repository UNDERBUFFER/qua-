
class Auth {
    static get(request, response) {
        response.render('auth/main.hbs')
    }
}

module.exports = Auth
