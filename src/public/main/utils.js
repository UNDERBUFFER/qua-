
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
    form.method = 'POST'
    form.id = "fact"

    const title = document.createElement('input')
    title.form = 'fact'
    title.type = 'text'
    title.className = "adding-question"

    const description = document.createElement('textarea')
    description.form = 'fact'
    description.className = "adding-question"

    const submit = document.createElement('input')
    submit.form = 'fact'
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
