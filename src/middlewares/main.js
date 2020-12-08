
const MIDDLEWARES = []

MIDDLEWARES.push(require('./auth'))
MIDDLEWARES.push(require('./logging'))

module.exports = MIDDLEWARES
