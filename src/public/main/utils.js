
const memText = "QUA🐸 Traceback Flow😎"
const questionsArea = document.getElementById('questions-area')

setStartText()

if (questionsArea.children.length == 0)
    questionsArea.innerText = "while questions don't exist ;( ..."


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
