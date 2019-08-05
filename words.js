// create variables
var words = ["boeing","airbus","douglas","cessna","lockheed","bombardier","beechcraft","embraer","saab","aerospatile","fokker","dehavilland"];
var answer = "";
var letters = [];
var misses = [];
var scores = [];
var blanks = 0;
var remaining = 9;
var guess = [];
var wins= 0;
var losses= 0;

// create functions

function start (   ) {
    answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);
    letters = answer.split("");
    console.log(letters);
    blanks = letters.length;
    
    var remaining = 0;
    var misses = [];
    var scores = [];    

    for (var i=0; i<letters.length; i++){
        scores.push("_");
        
    }
    console.log(scores);
// rewrite the HTML to reflect gameplay

    
}

function checkAnswer(letters) {

    var letterGuess = false;

    for (var i=0; i<letters.length; i++) {
        if(guess[i] == letters[i]) {
            letterGuess == true;
        }
    }


    if (letterGuess) {
        for (var i=0; i<blanks; i++){
            if(guess[i] == letters[i]) {
                scores[i] = letters[i];
            }
        }  
       
     }
     else {
        misses.push(guess);
        remaining--;
    }
 
//   Log the correct answers and remaining guesses to the HTML
    document.getElementById("answer").innerHTML = scores;
    document.getElementById("remaining").innerHTML = remaining;
    console.log(scores);
        }

    
function gameOver(){
    console.log("Wins:" + wins +  " Losses: " + losses + " Guesseses Remaining: " + remaining);

    document.getElementById("remaining").innerHTML = remaining;
    document.getElementById("scores").innerHTML = scores;
    document.getElementById("misses").innerHTML = misses;

    if (letters.toString() == scores.toString()) {
        wins++;
        alert("Winner!");

    document.getElementById("Wins").innerHTML = wins;
        // restart game
        start();
    }
    else {
        losses++;
        alert("You Crash, You Die!");
            // update wins
        document.getElementById("Losses").innerHTML = losses;
            // update losses
        start();
    }

}




// run game
start();

// keyboard functions

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guess);
    checkAnswer(guess);
}