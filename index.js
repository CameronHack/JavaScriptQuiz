// grabbing locations
const startId = document.querySelector('#start')
const quizDiv = document.querySelector('#quiz')
const question = document.querySelector('#question')
const questionButton1 = document.querySelector('#answer1')
const questionButton2 = document.querySelector('#answer2')
const questionButton3 = document.querySelector('#answer3')
const questionButton4 = document.querySelector('#answer4')
const timerH2 = document.querySelector('#timerH2')
const endScreen = document.querySelector('#endScreen')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []
// starting time allowed for the test
let timer = 90
// current question being displayed
let currentQuestion = [0]
// question array
let questions = [
    { question: "lorem1", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem2", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem2" },
    { question: "lorem3", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem3" },
    { question: "lorem4", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem4" },
    { question: "lorem5", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem6", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem7", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem8", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem9", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" },
    { question: "lorem10", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1" }
]

// when you click the start quiz button it calls the startQuiz function
startId.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        startQuiz()
    }
})

function startQuiz() {
    // hides the start menu
    startId.setAttribute("class", "hidden")
    // unhides the quiz
    quizDiv.setAttribute("class", "")
    // renders the question when quiz starts
    renderQuestion()

    // Renders current question and its answers
    function renderQuestion() {
        question.textContent = questions[currentQuestion].question
        questionButton1.textContent = questions[currentQuestion].answers[0]
        questionButton2.textContent = questions[currentQuestion].answers[1]
        questionButton3.textContent = questions[currentQuestion].answers[2]
        questionButton4.textContent = questions[currentQuestion].answers[3]
        console.log('render question' + questions[currentQuestion].correctAnswer)
    }

    // event listener
    quizDiv.addEventListener('click', function (e) {
        // making sure the click only applies to the button
        if (e.target.matches('button')) {
            if (questions[currentQuestion].correctAnswer === e.target.innerText) {
                console.log('TRUE')
            } else {
                timer -= 10
                console.log('FALSE')
            }

            // moves to the next question
            currentQuestion++

            // if you answer all the questions and havent run out of time this ends the game
            if (currentQuestion > questions.length - 1) {
                gameOver()
            } else {
                // rerenders the question
                renderQuestion()
            }
        }
    })

    // timer countdown... starts when quiz starts
    timerH2.textContent = timer + ' seconds left'
    let timerId = setInterval(function () {
        // -1 off the timer every second
        timer--
        // displays the timer as text
        timerH2.textContent = timer + ' seconds left'
        // if you run out of time before you answer all questions it ends the game
        if (timer <= 0) {
            clearInterval(timerId)
            gameOver()
        }
    }, 1000)
}

// game over screen
function gameOver() {
    // hides the quiz
    quizDiv.setAttribute("class", "hidden")
    // unhides game over screen
    endScreen.setAttribute("class", "")

}



// localStorage.setItem('highScores', JSON.stringify([{'initials': 'what the user enters', 'score': time left on timer}]))