
const WebSocket = require('ws')


class WebSocketServer {
    constructor( options ) {
        this.socket = new WebSocket.Server( options )
        this.clients = []
    }
    main() {
        this.socket.on( 'connection', clientSocket => {
            console.log( '[websocket] new connection' )
            this.clients.push( clientSocket )

            clientSocket.on( 'message', message => {
                console.log( `[websocket] getting message '${message}'` )
                for( let otherClientSocket of this.clients ) {
                    if ( otherClientSocket != clientSocket ) otherClientSocket.send( message )
                }
            } )

            clientSocket.on( 'close', () => {
                console.log( '[websocket] closing connection' )
                const index = this.clients.indexOf( clientSocket )
                this.clients.splice( index, 1 )
            } )

        } )
    }
}

module.exports = WebSocketServer
