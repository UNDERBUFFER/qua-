
const memText = "QUA🐸 Traceback Flow😎"
const questionsArea = document.getElementById('questions-area')

setStartText()

if (questionsArea.children.length == 0)
    questionsArea.innerText = "while questions don't exist ;( ..."


function setStartText() {
    document.getElementById('info').innerText = memText
}


function setTextWithOnMouse() {
    document.getElementById('info').innerText = memText.slice(0, -2) + '🙈'
}

