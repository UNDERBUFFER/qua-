
const url = new URL( document.URL )
const socket = new WebSocket( `ws://${url.host}/chat` )
let PROCESS = true


function addMessage(objectData, isThisUser=false) {
    let text = `[${objectData.nickname}]: ${objectData.text}`
    if (isThisUser) {
        text = `[YOU]: ${objectData.text}`
    }

    const mainDiv = document.getElementById('messages')
    const message = document.createElement('div')
    message.className = isThisUser ? 'user-message' : 'message'
    message.innerHTML = `<b>${text}</b>`
    if (mainDiv.children.length > 0) mainDiv.insertBefore( message, mainDiv.children[0] )
    else mainDiv.appendChild( message )

    return true
}


async function takeMessage() {
    const div = document.getElementById('message-text')
    const data = div.value
    div.value = ''

    const jsonData = await getUser()

    return {
        nickname: jsonData.user.nickname,
        text: data
    }
}