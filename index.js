// grabbing the location of 
const quizDiv = document.querySelector('#quiz')
const question = document.querySelector('#question')
const questionButton1 = document.querySelector('#answer1')
const questionButton2 = document.querySelector('#answer2')
const questionButton3 = document.querySelector('#answer3')
const questionButton4 = document.querySelector('#answer4')
const timerH2 = document.querySelector('#timerH2')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []
// starting time allowed for the test
let timer = 90
// current question being displayed
let currentQuestion = [0]

// timer countdown
let timerId = setInterval(function(){
    timer -= 1
    console.log(timer)
}, 1000)

// questions
let questions = [
    {question: "lorem1", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1},
    {question: "lorem2", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1},
    {question: "lorem3", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1},
    {question: "lorem4", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1},
    {question: "lorem5", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1},
    {question: "lorem6", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1}
]


// placeholder
renderQuestion()

function renderQuestion(){

    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    console.log(questions[currentQuestion].correctAnswer)

}


// event listener
quizDiv.addEventListener('click', function(e){
    // making sure the click only applies to the button
    if (e.target.matches('button')){
        console.log('clicked')
        console.log('value:' + e.target.innerText)
        console.log('correct answer:' + questions[currentQuestion].correctAnswer)

        // moves to the next question
        currentQuestion++
        // rerenders the question
        renderQuestion()

    }

})

// localStorage.setItem('highScores', JSON.stringify([{'initials': 'cam', 'score': 90}]))