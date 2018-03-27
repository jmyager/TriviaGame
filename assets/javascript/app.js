// Define variables to store user's correct and incorrect guesses
var correct = 0;
var incorrect = 0;
var userGuess;
var i = 0;

// Define object containing all questions and answers
var questionArray = [
    {
        q: "What is the fastest fish in the Ocean?",
        a1: "Barracuda",
        a2: "Sailfish",
        a3: "Clownfish",
        a4: "Marlin",
        ca: "Sailfish"
    },
    {
        q: "By area, what is the smallest ocean in the world?",
        a1: "Atlantic Ocean",
        a2: "Indian Ocean",
        a3: "Pacific Ocean",
        a4: "Arctic Ocean",
        ca: "Arctic Ocean"
    },
    {
        q: "What is the largest animal currently on Earth?",
        a1: "Blue Whale",
        a2: "Whale Shark",
        a3: "Giant Squid",
        a4: "Humpback Whale",
        ca: "Blue Whale"
    }
];

// Timer variables
var count = 10;
var intervalId;
var questionIntervalId;


// Define parent function to display questions, answers, and timers
function loadQuestion(questionSelect) {
    // Remove start button and clear text
    $("#container").empty();
    $("#header-message").empty();
        
    // displayQuestion function is called to display question & answers on the page.
    displayQuestion(questionSelect);

    // Display timer, reset the count, set intervalId and begin timer function
    count = 10;
    $("#time").html(count);
    intervalId = setInterval(function(){questionTimer()},1000);
}

// Define function that will clear previous question/answers and input new question and answers
function displayQuestion(questionSelect) {
    $("#question, #answer1, #answer2, #answer3, #answer4").empty();
    $("#question").html(questionSelect[i].q);
    $("#answer1").html(questionSelect[i].a1);
    $("#answer2").html(questionSelect[i].a2);
    $("#answer3").html(questionSelect[i].a3);
    $("#answer4").html(questionSelect[i].a4);
}

// Define function for 10 second timer that resets when it reaches 0.
function questionTimer() {
    count--;
    $("#time").html(count);

    if (count < 0) {
        incorrect++;
        $("header-message").html("Out of time!");
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
        userGuess = questionSelect[i].a1;
        checkGuess(questionSelect);
    })
    $("#answer2").click(function(){
        userGuess = questionSelect[i].a2;
        checkGuess(questionSelect);
    })
    $("#answer3").click(function(){
        userGuess = questionSelect[i].a3;
        checkGuess(questionSelect);
    })
    $("#answer4").click(function(){
        userGuess = questionSelect[i].a4;
        checkGuess(questionSelect);
    })
}

// Define function to check if user's guess is correct
function checkGuess (questionSelect) {
    if (userGuess === questionSelect[i].ca){
        correct++;
        $("#header-message").html("You guessed correctly!");
    }
    else {
        incorrect++;
        $("#header-message").html("You guessed incorrectly!");
       
    }
    showCorrectAnswer();
    clearInterval(intervalId);
    
}

// Define funcion to show correct answer content when user has answered or time has run out
function showCorrectAnswer() {
    $("#question, #answer1, #answer2, #answer3, #answer4").empty();
    $("#question").html("The correct answer is " + questionArray[i].ca);
    nextQuestion();
}

// define function to move to the next question in the array and check to see if it is the last question
function nextQuestion() {
    console.log(i);
    if (questionIntervalId != null) {
    clearInterval(questionIntervalId);
    }
    if (i === questionArray.length - 1) {
        $("#question, #answer1, #answer2, #answer3, #answer4").empty();
        $("#header-message").html("End of Trivia Game!");
        $("#answer1").html("Correct answers: " + correct + "/" + questionArray.length);
        $("#answer2").html("Incorrect answers: " + incorrect + "/" + questionArray.length);
        resetGame();
    }
    else {
        console.log(i);
        questionIntervalId = setInterval(function(){loadQuestion(questionArray)},5000);
        console.log(i);
    }
    i++;
    console.log(i);
}

// Define function to stop post-question timer
function stopTimer() {
    clearInterval(questionIntervalId);
}

// User presses start button to start the game.
$("#start").click(function() {
    // User pressed one of 4 answer buttons
    checkAnswer(questionArray);
    loadQuestion(questionArray);
});

// Define function to reset game at the end
function resetGame() {
    $("#container").html('<a class="btn btn-primary btn-lg" id="start" href="#" role="button">Restart!</a>');
    correct = 0;
    incorrect = 0;
    userGuess;
    i = 0;
}