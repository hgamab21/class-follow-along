// Psychic Game: the Pseudo edition
// Parts:
// -Guess Count
// -Win Count
// -Loss Count
// -Letter Tracker
// -Computer Guess
// -Player Guess
// -Game Logic

// ::Guess Count
// -starts at 9
// -resets if win
// -resets if loss

// ::Win Count
// -starts at 0
// -add one for every win

// ::Loss Count
// -starts at 0
// -add one for every loss

// ::Letter Tracker
// -stores player guesses
// -clears out on game win/loss

// ::Computer Guess
// -guess a random letter

// ::Player Guess
// -take a button press as a guess

// ::Game Logic
// -start with empty guesses, computer guess
// -if player guess is computer guess, win and reset game
// -else if guesses are 0, loss and reset game
// -else guesses go down by one, add that guess to Letter Tracker

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = 9;
var wins = 0;
var losses = 0;
var letterGuesses = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];


var userText = document.getElementById("guesses-so-far");

function reset(){
    guesses = 9;
    letterGuesses = [];
    getComputerGuess();
}

function getComputerGuess(){
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

document.onkeyup = function(event){
    var currentGuess = event.key;

    if(currentGuess === computerGuess){
        wins++;
        console.log(wins);
        document.getElementById('wins').innerHTML = wins;
        reset();
    }

    
    console.log(computerGuess);
    guesses--;
    letterGuesses.push(currentGuess);
    userText.innerHTML = letterGuesses;
}



































// var letterGuesses = []; //blank array, will store letter guesses
// var guesses = 9;
// var wins = 0;
// var losses = 0;
// var compGuess;

// function getComputerGuess(){
//     compGuess = letters[Math.floor(Math.random() * letters.length)];
//     console.log(compGuess);
// }

// function guessesLeft(){
//     document.getElementById('guesses-left').innerHTML = guesses;
// }

// function resetGame(){
//     guesses = 9;
//     letterGuesses = [];
//     getComputerGuess();    
// }

// getComputerGuess();

// document.onkeyup = function(event){
//     var guess = event.key.toLowerCase();
//     letterGuesses.push(guess);
//     console.log(event.key);
//     guesses--;
//     if(guess === compGuess){
//         wins++;
//         document.getElementById('wins').innerHTML = wins;
//         resetGame();
//     }
//     else if(guesses === 0){
//         losses++
//         document.getElementById('losses').innerHTML = losses;
//         resetGame();
//     }
//     guessesLeft();
//     document.getElementById('guesses-so-far').innerHTML = letterGuesses.join(', ');

// }