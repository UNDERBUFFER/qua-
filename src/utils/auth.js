
const User = require('../models/User')
const { encrypt } = require('./encript')


function login(request, response, user) {
    const id = encrypt(user.nickname)
    response.cookie('id', id)
    request.user = user
}


function authenticate(email, password) {
    return new Promise((resolve, reject) => {
        User.find({ email, password }, (error, result) => {
            if (error) reject(error)
            if (result.length > 0) resolve(result[0])
            else reject(new function() {
                this.nessage = 'This user is not defined!'
            })
        })
    })
}


module.exports = { authenticate, login }