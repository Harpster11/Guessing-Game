// create variables
var words = ["boeing", "airbus", "douglas", "cessna", "lockheed", "bombardier", "beechcraft", "embraer", "saab", "aerospatile", "fokker", "dehavilland"];
var answer = "";
var letters = [];
var misses = [];
var scores = [];
var blanks = 0;
var remaining = 9;
var guess = [];
var wins = 0;
var losses = 0;

// create random word selector function

function start() {
    answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);
    letters = answer.split("");
    console.log(letters);
    blanks = letters.length;


    var remaining = 0;
    var misses = [];
    var scores = [];

    // rewrite the HTML to reflect gameplay   

    for (var i = 0; i < blanks; i++) {
        // var underScore = document.createElement("span");
        // underScore.textContent = " _ ";
        // document.getElementById("answer").appendChild(underScore);
        scores.push("_");
        }
   
        document.getElementById("answer").textContent=scores;

}

function checkAnswer(guess) {

    var letterGuess = false;
    for (var i = 0; i < blanks; i++); {
        if (guess[i] == letters[i]); {
            letterGuess = true;
            console.log(letterGuess);
        }
    }


    if (letterGuess) {
        for (var i = 0; i < blanks; i++) {

            if (guess[i] == letters[i]); {
                console.log("guess: " + guess[i])
                scores[i] = letters[i];
                console.log(scores);
            }
        }
        document.getElementById("answer").textContent=scores;


    }
    else {
        misses.push(guess);
        remaining--;
        console.log(remaining);
    }

    //   Log the correct answers and remaining guesses to the HTML
    document.getElementById("remaining").innerHTML = remaining;
}


function gameOver() {
    console.log("Wins: " + wins + " Losses: " + losses + " Guesseses Remaining: " + remaining);

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
        document.getElementById("Losses").innerHTML = losses;
        start();
    }

}




// run game
start();

// keyboard functions

document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guess);
    checkAnswer(guess);
}