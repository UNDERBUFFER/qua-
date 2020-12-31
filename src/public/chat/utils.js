
const url = new URL( document.URL )
// const socket = new WebSocket( `ws://${url.host}/chat` )


async function addMessage(text, isThisUser=false) {
    if (isThisUser) {
        const jsonData = await getUser()
        text = `${jsonData.user.nickname}: ${text}`
    }
    const mainDiv = document.getElementById('messages')
    const message = document.createElement('div')
    message.className = isThisUser ? 'user-message' : 'message'
    message.innerHTML = `<b>${text}</b>`
    if (mainDiv.children.length > 0) mainDiv.insertBefore( message, mainDiv.children[0] )
    else mainDiv.appendChild( message )
}


function takeMessage() {
    const div = document.getElementById('message-text')
    const data = div.value
    div.value = ''
    return data
}