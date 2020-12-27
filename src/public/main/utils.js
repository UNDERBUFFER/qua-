
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

