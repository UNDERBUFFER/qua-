
const DOCUMENT_URL = document.URL[document.URL.length - 1] != '/' ? document.URL + '/' : document.URL
setQuestionData()
getAnswers()


async function setQuestionData() {
    const response = await fetch(`${DOCUMENT_URL}question-info`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    let jsonData = await response.json()

    const secondResponse = await fetch(`${DOCUMENT_URL}author-info`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    jsonData.author = await secondResponse.json()

    document.getElementById('question-title').innerHTML = `<b>${jsonData.author.nickname}: ${jsonData.title}</b>`
    document.getElementById('question-text').innerText = jsonData.description

    return true
}


async function getAnswers() {
    const response = await fetch(`${DOCUMENT_URL}all-answers`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    let jsonData = await response.json()

    for (let i = 0; i < jsonData.length; i++) {
        let secondResponse = await fetch(`${DOCUMENT_URL}${jsonData[i]._id}/author-info`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        })
        jsonData[i].author = await secondResponse.json()
        const div = document.createElement('div')
        div.className = 'answer'
        div.innerHTML = `<b>${jsonData[i].author.nickname}: ${jsonData[i].text}</b>`
        document.getElementById('answers-area').appendChild(div)
    }

    return true
}