var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questions = document.querySelector("section")

var timer;
var timerCount;

// Get Dom Elements
let questionsEl = document.querySelector("#questions");
let timerCountEl = document.querySelector("#timer-count");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start-button");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let restartBtn = document.querySelector("#restart");

// Before quiz begins
let currentQuestionIndex = 0;
let time = questions.lenght * 15;
let timerCount;

// The startGame function is called when the start button is clicked. Quiz starts and hides beginning page.
function startQuiz(){
    timerCount = setInterval(clockTick, 1000);
    timerElement.textContent = time;
    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestions()
}

//This loops the array of questions. Answers and creates list with buttons.
function getQuestions(){
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("questions-words");
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = i + 1 + ". " choice;
            choiceBtn.onclick = questionClick;
            choicesEl.appendChild(choiceBtn);
        }
    );
}

//This checks for correct answers and deducts time for wrong answer and goes to the next questions
function questionClick(){
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerCountEl.textContent = time;
        feedbackEl.textContent = 'Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.';
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.lenght){
        quizEnd();
    } else{
        getQuestions();
    }
}

//Ends the quiz by hiding the questions and stops time to show final score.
function quizEnd(){
    clearInterval(timerCountId);
    let endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

//Ends the quiz timer when it reaches 0.
function clockTick(){
    time--;
    timerCountEl.textContent = time;
    if (time <= 0){
        quizEnd();
    }
}



// The following code builds the questions that are being asked during the quiz.
// They indicate question

Let questions = [
    {
        prompt: "Commonly used data types DO NOT include:"
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ]
        answer: "alerts",
    },
    {
        prompt: "The condition in an if/else statement is enclosed within __________."
        options: [
            "1. quotes",
            "2. curlybrackets",
            "3. paranthesis",
            "4. square brackets",
        ]
        answer: "paranthesis",
    },
    {
        prompt: "Arrays in JavaScript can be used to store ________."
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ]
        answer: "all of the above",
    },
    {
        prompt: "String values must be enclosed within ______ when being assigned to variables."
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. paranthesis",
        ]
        answer: "commas",
    },
    {
        prompt: "A very useful tool used during development and debuggin for printing content to the debugger is:"
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ]
        answer: "console.log",
    },
    {
        prompt: "String values must be enclosed within ______ when being assigned to variables."
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ]
        answer: "alerts",
    },
];