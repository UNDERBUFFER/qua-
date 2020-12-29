
getUser()

function parseForm(action='registration') {
    const dataArray = [...document.getElementsByClassName('data-button')]
    const dataObject = {
        name: '',
        nickname: '',
        email: '',
        password: ''
    }
    if (action == "entrance") {
        delete dataObject.name
        delete dataObject.nickname
    }
    for (let element of dataArray) {
        for (let key of Object.keys(dataObject)) {
            if (element.name == `${action}.${key}`)
                dataObject[key] = element.value
        }
    }
    return dataObject
}


async function createRequest(action='registration') {
    const response = await fetch(`/auth/${action}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify( parseForm(action) )
    })
    const jsonData = await response.json()
    if (jsonData.status == "ok") document.location.reload(true)
    else console.log(jsonData)
    return true
}


async function getUser() {
    const response = await fetch(`/auth/user`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    const jsonData = await response.json()
    if (jsonData.userIsAuthorized) {
        const div = document.getElementById('login-link')
        div.innerText = `${jsonData.user.nickname} (Выйти)`
        div.href = '/auth/logout'
    }
    return true
}
