
const memText = "QUA🐸 Traceback Flow😎"

setStartText()
getQuestions()

function setStartText() {
    document.getElementById('info').value = memText
}


function setTextWithOnMouse() {
    document.getElementById('info').value = `QUA🐸 Задать вопрос😎`
}


function addFormForQuestion(div) {
    const form = document.createElement('form')
    form.method = 'post'
    form.id = "fact"
    form.action = "/question"
    form.enctype = "application/x-www-form-urlencoded"

    const title = document.createElement('input')
    title.setAttribute('form', 'fact')
    title.type = 'text'
    title.name = 'title'
    title.className = "adding-question"

    const description = document.createElement('textarea')
    description.setAttribute('form', 'fact')
    description.name = 'description'
    description.className = "adding-question"

    const submit = document.createElement('input')
    submit.setAttribute('form', 'fact')
    submit.type = 'submit'
    submit.value = 'send!'
    submit.className = "adding-question"

    for (let element of div.children) {
        div.removeChild(element)
    }
    div.innerText = ''
    div.appendChild(form)
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(submit)

    return true
}


async function getQuestions() {
    const questionsArea = document.getElementById('questions-area')

    const response = await fetch('/question/all-questions', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })

    let jsonData = await response.json()
    jsonData = jsonData.slice(jsonData.length - 3)

    for (let i = 0; i < jsonData.length; i++) {
        let secondResponse = await fetch(`/question/${jsonData[i]._id}/author-info`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        })
        jsonData[i].author = await secondResponse.json()

        let a = document.createElement('a')
        a.className = 'question'
        a.innerHTML = `<b>${jsonData[i].author.nickname}</b>: ${jsonData[i].title}`
        a.href = `/question/${jsonData[i]._id}`
        questionsArea.appendChild(a)
    }

    if (questionsArea.children.length == 0)
        questionsArea.innerText = "while questions don't exist ;( ..."

    return true
}
