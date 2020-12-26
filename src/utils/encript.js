
const crypto = require('crypto')
const settings = require('../settings')

const algorithm = 'aes-192-cbc'
const key = settings.ENCRYPT_KEY


function encrypt(text) {
    const cipher = crypto.createCipher(algorithm, key)
    const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex')
    return encrypted
}


function decrypt(text) {
    const decipher = crypto.createDecipher(algorithm, key)
    const decrypted = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8')
    return decrypted
}

module.exports = { encrypt, decrypt }
