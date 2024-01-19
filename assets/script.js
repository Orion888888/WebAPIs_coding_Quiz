// The following code builds the questions that are being asked during the quiz.
// They indicate question

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within __________.",
        options: ["quotes", "curlybrackets", "paranthesis", "square brackets"],
        answer: "paranthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "paranthesis"],
        answer: "commas",
    },
    {
        question: "A very useful tool used during development and debuggin for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
];

// Get Dom Elements
let questionsEl = document.querySelector("#questions");
let timerCountEl = document.querySelector("#timer-count");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector(".start-button");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");


// Before quiz begins
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerCount;

// The startGame function is called when the start button is clicked. Quiz starts and hides beginning page.
function startQuiz(){
    console.log("Inside startQuiz");
    timerCount = setInterval(clockTick, 1000);
    timerCountEl.textContent = time;

    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class",);
    getQuestions();
}

//This loops the array of questions. Answers and creates list with buttons.
function getQuestions(){
    console.log("Inside getQuestions");
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("questions-words");
    
    if (promptEl){
        promptEl.textContent = currentQuestion.question;
        
        let choicesEl = document.getElementById("options");

        if (choicesEl){
            choicesEl.innerHTML = "";
        }
        
            currentQuestion.options.forEach(function (choice, i) {
                let choiceBtn = document.createElement("button");
                choiceBtn.setAttribute("value", choice);
                choiceBtn.textContent = i + 1 + ". " + choice;
                
                if(choiceBtn && choicesEl){
                    choiceBtn.onclick = questionClick;
                    choicesEl.appendChild(choiceBtn); 
                }    
            }
        );
    }
}

//This checks for correct answers and deducts time for wrong answer and goes to the next questions
function questionClick(){
    if (this.value !== questions[currentQuestionIndex].answer){
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerCountEl.textContent = time;
        feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length){
        quizEnd();
    } else{
        getQuestions();
    }
}

//Ends the quiz by hiding the questions and stops time to show final score.
function quizEnd(){
    clearInterval(timerCount);
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

//This saves the scores to the local storage along with name.
function saveHighscore(){
    let name = nameEl.value.trim();
    if(name !== "") {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            name: name,
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        alert("Your score has been submitted!");
    }
}

//This is to save the users' score after pressing enter.
function checkForEnter(event){
    if (event.key === "Enter"){
        saveHighscore();
        alert("Your score has been submitted!");
    }
}

nameEl.onkeyup = checkForEnter;

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

