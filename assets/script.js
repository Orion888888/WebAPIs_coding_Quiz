var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;

// The startGame function is called when the start button is clicked
function startQuiz(){
    timerCount = 75;
    startButton.disabled = true;
    startTimer()
}

// The following code builds the questions that are being asked during the quiz.
// They indicate question 
const questions = [
    {
        prompt: "Commonly used data types DO NOT include:"
        options:[
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ]
        answer: "alerts",
    },
    {
        prompt: "The condition in an if/else statement is enclosed within __________."
        options:[
            "1. quotes",
            "2. curlybrackets",
            "3. paranthesis",
            "4. square brackets",
        ]
        answer: "paranthesis",
    },
    {
        prompt: "Arrays in JavaScript can be used to store ________."
        options:[
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ]
        answer: "all of the above",
    },
    {
        prompt: "String values must be enclosed within ______ when being assigned to variables."
        options:[
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. paranthesis",
        ]
        answer: "commas",
    },
    {
        prompt: "A very useful tool used during development and debuggin for printing content to the debugger is:"
        options:[
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ]
        answer: "console.log",
    },
    {
        prompt: "String values must be enclosed within ______ when being assigned to variables."
        options:[
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ]
        answer: "alerts",
    },
];