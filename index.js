// grabbing locations
const startId = document.querySelector('#start')
const quiz = document.querySelector('#quiz')
const question = document.querySelector('#question')
const questionButton1 = document.querySelector('#answer1')
const questionButton2 = document.querySelector('#answer2')
const questionButton3 = document.querySelector('#answer3')
const questionButton4 = document.querySelector('#answer4')
const timerH2 = document.querySelector('#timerH2')
const endScreen = document.querySelector('#endScreen')
const endForm = document.querySelector('#endForm')
let topScore = document.querySelector('#topScore')
let endScore = document.querySelector('#endScore')

// starting time allowed for the test
let timer = 150
// current question being displayed
let currentQuestion = [0]
// questions generated from gpt3.5 (https://chat.openai.com/)
let questions = [
    { question: "Which of the following is NOT a primitive data type in JavaScript?", answers: ["a) string", "b) number", "c) array", "d) boolean"], correctAnswer: "c) array" },
    { question: "How do you create a new array in JavaScript?", answers: ["a) var myArray = [];", "b) var myArray = ();", "c) array myArray = [];", "d) new Array myArray[];"], correctAnswer: "a) var myArray = [];" },
    { question: "What does the === operator in JavaScript check for?", answers: ["a) Equality, allowing type coercion", "b) Equality, without type coercion", "c) Assignment", "d) Inequality"], correctAnswer: "b) Equality, without type coercion" },
    { question: "What is the purpose of the setTimeout() function in JavaScript?", answers: ["a) To execute a function immediately", "b) To pause the execution of a function", "c) To execute a function after a specified delay", "d) To repeat a function at regular intervals"], correctAnswer: "c) To execute a function after a specified delay" },
    { question: "How do you access the number of elements in an array called myArray?", answers: ["a) myArray.size()", "b) myArray.length", "c) myArray.count", "d) myArray.size"], correctAnswer: "b) myArray.length" },
    { question: "What does the typeof operator return for an array?", answers: ["a) array", "b) object", "c) arrayobject", "d) collection"], correctAnswer: "b) object" },
    { question: "Which keyword is used to declare a constant variable in JavaScript?", answers: ["a) let", "b) var", "c) const", "d) constVar"], correctAnswer: "c) const" },
    { question: "What is the correct way to write a single-line comment in JavaScript?", answers: ["a) // This is a comment", "b) <!-- This is a comment -->", "c) /* This is a comment */", "d) # This is a comment"], correctAnswer: "a) // This is a comment" },
    { question: "What does the NaN value represent in JavaScript?", answers: ["a) Not a Node", "b) Not a Null", "c) Not a Number", "d) No Available Number"], correctAnswer: "c) Not a Number" },
    { question: "What is the purpose of the splice() method in JavaScript arrays?", answers: ["a) To add elements to the end of an array", "b) To remove elements from an array", "c) To sort the elements of an array", "d) To merge two arrays"], correctAnswer: "b) To remove elements from an array" },
    { question: "What is the purpose of the querySelector() method in JavaScript?", answers: ["a) To select the first element that matches a specified CSS selector", "b) To modify the query parameters of a URL", "c) To create a new HTML element in the DOM", "d) To retrieve data from a remote server"], correctAnswer: "a) To select the first element that matches a specified CSS selector" }
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
    quiz.setAttribute("class", "")
    // renders the question when quiz starts
    renderQuestion()

    // Renders current question and its answers
    function renderQuestion() {
        question.textContent = questions[currentQuestion].question
        questionButton1.textContent = questions[currentQuestion].answers[0]
        questionButton2.textContent = questions[currentQuestion].answers[1]
        questionButton3.textContent = questions[currentQuestion].answers[2]
        questionButton4.textContent = questions[currentQuestion].answers[3]
    }

    // event listener on quiz screen
    quiz.addEventListener('click', function (e) {
        // making sure the click only applies to the button
        if (e.target.matches('button')) {
            if (questions[currentQuestion].correctAnswer != e.target.innerText) {
                timer -= 10
            }

            // moves to the next question
            currentQuestion++

            // if you answer all the questions and havent run out of time this ends the game
            if (currentQuestion > questions.length - 1) {
                clearInterval(timerId)
                quizOver()
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
            quizOver()
        }
    }, 1000)
}

// game over screen
function quizOver() {
    // hides the quiz
    quiz.setAttribute("class", "hidden")
    // unhides game over screen
    endScreen.setAttribute("class", "")
    // displays users final score
    endScore.textContent = 'SCORE: ' + timer
    
    // grabs scores from local storage
    let highScores = JSON.parse(localStorage.getItem('highScores')) || []
    // displays last score
    topScore.textContent = 'Last submission: ' + highScores[0].initials + ' ' + highScores[0].score
}

// listener for the confirm button
endForm.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        let initialsInput = document.querySelector('#initialsInput')
        // sets users initials based on what they type into the input
        let initials = initialsInput.value

        // length of the users initials must not exceed 3 characters and does not submit score if input form is empty
        if (initials.length <= 3 && initials != ""){
            setScore()
        } else {
            // if user types in more then 3 characters this alert appears
            window.alert("Initials must be 3 characters or less");
        }

        // adds user score to list of their previous scores
        function setScore() {
            localStorage.setItem('highScores', JSON.stringify([{ 'initials': initials, 'score': timer }]))
        }
    }
})