// Define variables to store user's correct and incorrect guesses
var correct = 0;
var incorrect = 0;
var userGuess;
var rightWrong;

// Define object containing all questions and answers
var questionArray = [
    {
        q: "What is the flight trajectory of a squirrel?",
        a1: "Answer 1",
        a2: "Answer 2",
        a3: "Answer 3",
        a4: "Answer 4",
        ca: "Answer 2"
    },
    {
        q: "What is the flight trajectory of a bat?",
        a1: "Answer 1",
        a2: "Answer 2",
        a3: "Answer 3",
        a4: "Answer 4",
        ca: "Answer 4"
    }
];

// Timer variables
var count = 10;
var intervalId;

// Define parent function to display questions, answers, and timers
function loadQuestion(x) {
    // Remove start button
    $("#container").html("");
        
    // displayQuestion function is called to display first question & answers on the page.
    displayQuestion(x);

    // Display timer, set intervalId and begin timer function
    $("#time").html(count);
    intervalId = setInterval(function(){questionTimer()},1000);

    // User pressed one of 4 answer buttons
    checkAnswer(x);
}

// Define function that will clear previous question/answers and input new question and answers
function displayQuestion(questionSelect) {
    $("#question, #answer1, #answer2, #answer3, #answer4").html("");
    $("#question").html(questionSelect.q);
    $("#answer1").html(questionSelect.a1);
    $("#answer2").html(questionSelect.a2);
    $("#answer3").html(questionSelect.a3);
    $("#answer4").html(questionSelect.a4);
}

// Define function for 10 second timer that resets when it reaches 0.
function questionTimer() {
    count--;
    $("#time").html(count);

    if (count < 0) {
        alert("Out of time!");
        clearInterval(intervalId);
        count = 10;
        $("#time").html(count);
        showCorrectAnswer();
    }
}

// Define function to collect user's answer
function checkAnswer (questionSelect) {
    // User presses one of 4 answer buttons
    $("#answer1").click(function(){
        userGuess = questionSelect.a1;
        checkGuess(questionSelect);
    })
    $("#answer2").click(function(){
        userGuess = questionSelect.a2;
        checkGuess(questionSelect);
    })
    $("#answer3").click(function(){
        userGuess = questionSelect.a3;
        checkGuess(questionSelect);
    })
    $("#answer4").click(function(){
        userGuess = questionSelect.a4;
        checkGuess(questionSelect);
    })
}

// Define function to check if user's guess is correct
function checkGuess (questionSelect) {
    if (userGuess === questionSelect.ca){
        correct++;
        console.log("correct answers: " + correct);
        rightWrong = true;
    }
    else {
        incorrect++;
        console.log("incorrect answers: " + incorrect);
        rightWrong = false;
       
    }
    showCorrectAnswer();
}

// Define funcion to show correct answer content when user has answered or time has run out
function showCorrectAnswer() {
    $("#content").empty();
    $("#content").html("The correct answer is...");
    nextQuestion();
}

// define function to move to the next question in the array and check to see if it is the last question
function nextQuestion() {
    if (i === questionArray.length) {
        $("#content").empty();
        $("#content").html("End of Triva Game!");
    }
    else {
        questionIntervalId = setInterval(function(){loadQuestion(questionArray[i++])},5000);
    }
}

// User presses start button to start the game.
$("#start").click(function() {
    loadQuestion(questionArray[0]);
});
