 //the array of computer choices...entire alphabet
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 // assigning my variables to the html 
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var soFar = [];

 // assigning text designations to the spans above.
 var winsText = document.getElementById("wins");
 var lossesText = document.getElementById("losses");
 var guessesLeftText = document.getElementById("guessesLeft");
 var soFarText = document.getElementById("soFar")

 //creating the first computer guess
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 console.log(computerGuess);

 //assigning the keypress to the variable userGuess...onkeyup
 document.onkeyup = function (event) {
     var userGuess = event.key;

     // this bit makes it so there are no duplicate guesses
     if (soFar.includes(userGuess) === false) {
         soFar.push(userGuess);
     }
     else {
         guessesLeft++
     }

     //this is for if the letter is guessed correctly
     if (userGuess == computerGuess) {
         wins++;
         alert("YOU WIN!");
         guessesLeft = 9;
         soFar = [];
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         console.log(computerGuess);
     }
     // this is for if you run out of guesses
     else if (guessesLeft === 1) {
         losses++;
         alert("You Lose");
         guessesLeft = 9;
         soFar = [];
         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         console.log(computerGuess);

     }
    //this is keeping your guesses left count
     else if (userGuess !== computerGuess) {
         guessesLeft--;

     }
     //assigns the new values to the wins, losses, guesses left, and the guesses so far variables
     winsText.textContent = wins;
     lossesText.textContent = losses;
     guessesLeftText.textContent = guessesLeft;
     soFarText.textContent = soFar;

 }