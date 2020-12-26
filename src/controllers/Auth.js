
class Auth {
    static get(request, response) {
        if (request.user) response.redirect('/')
        else response.render('auth/main.hbs')
    }
}

module.exports = Auth
