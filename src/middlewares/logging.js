
function loggingMiddleware(request, response, next) {
    console.debug({
        method: request.method.toUpperCase(),
        url: request.originalUrl,
        // TODO
        // status: response.statusCode,
        // user: request.user == null ? null : request.user.nickname
    })
    next()
}

module.exports = loggingMiddleware
