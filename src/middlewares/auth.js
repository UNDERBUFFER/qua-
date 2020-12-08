
const User = require('../models/User')
const { decrypt } = require('../utils/encript')

function authorizationMiddleware(request, response, next) {
    try {
        const id = request.cookies.id
        User.find({ nickname: decrypt(id) }, (error, result) => {
            if (error) console.log(error)
            if (result.length > 0) request.user = result[0]
            else request.user = null
            next()
        })
    } catch (error) {
        next()
    }
}

module.exports = authorizationMiddleware
