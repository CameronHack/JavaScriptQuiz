// grabbing the location of 
let startId = document.querySelector('#start')
let quizDiv = document.querySelector('#quiz')
let question = document.querySelector('#question')
let questionButton1 = document.querySelector('#answer1')
let questionButton2 = document.querySelector('#answer2')
let questionButton3 = document.querySelector('#answer3')
let questionButton4 = document.querySelector('#answer4')
let timerH2 = document.querySelector('#timerH2')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []
// starting time allowed for the test
let timer = 90
// current question being displayed
let currentQuestion = [0]



// questions
let questions = [
    {question: "lorem1", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem2", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem2"},
    {question: "lorem3", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem3"},
    {question: "lorem4", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem4"},
    {question: "lorem5", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem6", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem7", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem8", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem9", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"},
    {question: "lorem10", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: "lorem1"}
]



startId.addEventListener('click', function(e){
    if (e.target.matches('button')){
        startQuiz()
    }
})

function startQuiz(){
    // hides the start menu
    startId.setAttribute("class", "hidden")
    // shows the quiz
    quizDiv.setAttribute("class", "")
    // renders the question when quiz starts
    renderQuestion()
    
    // Renders current question and its answers
    function renderQuestion(){
        question.textContent = questions[currentQuestion].question
        questionButton1.textContent = questions[currentQuestion].answers[0]
        questionButton2.textContent = questions[currentQuestion].answers[1]
        questionButton3.textContent = questions[currentQuestion].answers[2]
        questionButton4.textContent = questions[currentQuestion].answers[3]
        console.log('render question' + questions[currentQuestion].correctAnswer)
    }
    
    // event listener
    quizDiv.addEventListener('click', function(e){
        // making sure the click only applies to the button
        if (e.target.matches('button')){
            if (questions[currentQuestion].correctAnswer === e.target.innerText) {
                console.log('TRUE')
            } else {
                timer -= 10
                console.log('FALSE')
            }
            // moves to the next question
            currentQuestion++

            // if you answer all the questions and havent run out of time this ends the game too
            if (currentQuestion > questions.length-1){
                gameOver()
                console.log("NO MORE QUESTIONS")
            } else {
                // rerenders the question
                renderQuestion()
            }
        }
    })
    
        // timer countdown... starts when quiz starts
        timerH2.textContent = timer + ' seconds left'
        let timerId = setInterval(function(){
            timer--
            timerH2.textContent = timer + ' seconds left'
            console.log(timer)
            if (timer <= 0) {
                clearInterval(timerId)
                gameOver()
            }
        }, 1000)
    

}

function gameOver(){
    quizDiv.setAttribute("class", "hidden")
}



// localStorage.setItem('highScores', JSON.stringify([{'initials': 'cam', 'score': 90}]))