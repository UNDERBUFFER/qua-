
const { logout } = require('../utils/auth')


class Logout {
    static get(request, response) {
        logout(request, response)
        response.redirect('/')        
    }
}

module.exports = Logout
