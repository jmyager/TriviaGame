// Define variables to store user's correct and incorrect guesses
var correct;
var incorrect;
var userGuess;

// Define object containing all questions and answers
var questionArray = {
    question1: {
        q: "What is the flight trajectory of a squirrel",
        a1: "Answer 1",
        a2: "Answer 2",
        a3: "Answer 3",
        a4: "Answer 4",
        ca: "Answer 2"
    },
    question2: {
        q: "What is the flight trajectory of a bat",
        a1: "Answer 1",
        a2: "Answer 2",
        a3: "Answer 3",
        a4: "Answer 4",
        ca: "Answer 4"
    }
};

// Timer variabls
var count = 10;
var intervalId;

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
    }
}



// User presses start button to start the game.
$("#start").click(function() {
    // Remove start button
    $("#container").html("");
    
    // displayQuestion function is called to display first question & answers on the page.
    displayQuestion(questionArray.question1);

    // Display timer, set intervalId and begin timer function
    $("#time").html(count);
    intervalId = setInterval(function(){questionTimer()},1000);
})

// $("#answer1").click(function(){
//     userGuess = "Answer1";
// $("#answer2").click(function(){
//     userGuess = "Answer2";
// $("#answer3").click(function(){
//     userGuess = "Answer3";
// $("#answer4").click(function(){
//     userGuess = "Answer4";
if (userGuess === question.Array.ca){
    correct++;
    console.log(correct);
}
else {
    incorrect--;
    console.log(incorrect);
}
// If user guess correct answer, variable correct = true, and vice versa for incorrect
