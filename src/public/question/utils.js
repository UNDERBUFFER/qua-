

setQuestionData()


async function setQuestionData() {
    const response = await fetch(`${document.URL}/question-info`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    let jsonData = await response.json()

    const secondResponse = await fetch(`${document.URL}/author-info`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    jsonData.author = await secondResponse.json()

    console.log(jsonData)

    document.getElementById('question-title').innerHTML = `<b>${jsonData.author.nickname}: ${jsonData.title}</b>`
    document.getElementById('question-text').innerText = jsonData.description
}