
class Auth {
    static get(request, response) {
        response.send('hello world')
        // response.render('main/main.hbs');
    }
    static post(request, response) {
        response.send('tmp fuck you')
    }
}

module.exports = Auth
