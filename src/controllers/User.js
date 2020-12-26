
class User {
    static get(request, response) {
        const jsonResult = {
            userIsAuthorized: !request.user ? false : true
        }
        jsonResult.user = jsonResult.userIsAuthorized ? request.user : null
        response.json( jsonResult )
    }
}

module.exports = User
