
class Chat {
    static get(request, response) {
        response.render('chat/main.hbs')
    }
}

module.exports = Chat
