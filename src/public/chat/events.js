
document.getElementById( 'message-send' ).onclick = () => {
    takeMessage().then( objectData => {
        addMessage( objectData, true )
        if (PROCESS) socket.send( JSON.stringify( objectData ) )
    } )
}


socket.onmessage = ( event ) => {
    console.log( `[websocket] getting message '${event.data}'` )
    addMessage( JSON.parse( event.data ), false )
}

socket.onclose = () => {
    console.log( '[websocket] closing connection' )
    PROCESS = false
}