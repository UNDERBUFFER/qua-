

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
    const response = await fetch('/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify( parseForm(action) )
    })
    const text = await response.text()
    console.log(text)
}

