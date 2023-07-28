const quizDiv = document.getElementById('quiz')
const question = document.getElementById('question')
const questionButton1 = document.getElementById('answer1')
const questionButton2 = document.getElementById('answer2')
const questionButton3 = document.getElementById('answer3')
const questionButton4 = document.getElementById('answer4')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []



let timer = 90

let timerId = setInterval(function(){
    timer -= 1
    console.log(timer)
}, 1000)





// questions
let questions = [
    {question: "lorem", answers: ["lorem1", "lorem2", "lorem3", "lorem4"], correctAnswer: 1}


]
// current question being displayed
let currentQuestion = 0

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



quizDiv.addEventListener('click', function(e){

    if (e.target.matches('button')){
        console.log('clicked')
        console.log('value:' + e.target.innerText)
        console.log('correct answer:' + questions[currentQuestion].correctAnswer)

        renderQuestion()
        currentQuestion++

    }

})

// localStorage.setItem('highScores', JSON.stringify([{'initials': 'cam', 'score': 90}]))