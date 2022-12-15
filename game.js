const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
       question: 'Inside which HTML element do we put the JavaScript?',
       choice1: '< javascript >',
       choice2: '< scripting >',
       choice3: '< script >',
       choice4: '< js >',
       answer: 3,
    },
    {
       question: 'How do you write "Hello World" in an alert box?',
       choice1: '  msgBox("Hello World"); ',
       choice2: ' msg("Hello World"); ',
       choice3: ' alertBox("Hello World"); ',
       choice4: ' alert("Hello World"); ',
       answer: 4,
    },
    {
       question: 'What is the correct way to write a JavaScript array?',
       choice1: 'var colors =["red", "green", "blue"]',
       choice2: 'var colors ="red", "green", "blue"',
       choice3: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
       choice4: ' var colors = (1:"red", 2:"green",3:"blue")',
       answer: 1,
    },
    {
       question: 'Which event occurs when the user clicks on an HTML element?',
       choice1: 'onmouseover',
       choice2: 'onchange',
       choice3: 'onclick',
       choice4: 'onmouseclick',
       answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex,  1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
     score +=num 
     scoreText.innerText = score
}

startGame()