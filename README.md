# Trivia Game
An ocean themed test of your nautical knowledge.

## Overview 
Trivia Game was an early learning exercise in building a Javascript and Jquery application with a focus on timers and the logic associated with them. 

Guiding the player through the trivia quiz, the application needed to show just one question at a time. The player is required to answer the question or allow the timer to run out, either way the quiz proceeds.

![Screenshot 1](/public/images/screen1.png?raw=true "Screenshot 1")

For each question, one of the following results occurs:

1. A correct answer grants the player a screen congratulating them on their success and after a few seconds displays the following question (all without user input, only timers).

2. An incorrect answer shows the player a screen informing them of their failure, with the correct answer displayed. Again, after a few seconds the quiz proceeds to the following question, all without user input.

3. A timeout tells the player that time's up and displays the correct answer. And you guessed it, proceeds to the next question after a few seconds, all without any user input.

On the final screen, the player is shown their number of correct answers, incorrect answers, and is given an option to restart the game. It's important to note that when the player restarts the game the window *does not reload*, but rather all timers and data stores are reset, effectively "resetting" the game.

## Demo
View the live demo [here](http://www.joshyager.com/TriviaGame/)
