// create variables
var words = ["boeing", "airbus", "douglas", "cessna", "lockheed", "bombardier", "beechcraft", "embraer", "saab", "aerospatile", "fokker", "dehavilland"];
var answer = "";
var letters = [];
var misses = [];
var scores = [];
var blanks = 0;
var remaining = 9;
var wins = 0;
var losses = 0;

// create random word selector function

function start() {
    answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);
    letters = answer.split("");
    console.log(letters);
    blanks = letters.length;

    misses = [];
    scores = [];
    remaining = 9;
   
  

    // rewrite the HTML to reflect gameplay   

    for (var i = 0; i < blanks; i++) {
        // var underScore = document.createElement("span");
        // underScore.textContent = " _ ";
        // document.getElementById("answer").appendChild(underScore);
        scores.push("_");
        
        }
   
        document.getElementById("answer").innerHTML = scores.join(" ");
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
}



function checkAnswer(guess) {

    var letterGuess = false;
    for (var i = 0; i < blanks; i++) {
        if (letters[i] == guess) {
            letterGuess = true;
            console.log("Letter Found" + guess);
            console.log(letterGuess);
        }
    }

    if(letterGuess) {
        for (var i = 0; i < blanks; i++) {

            if (letters[i] == guess) {
                console.log("guess: " + guess);
                scores[i] = guess;
                console.log(scores);
            }
        }
        document.getElementById("answer").innerHTML=scores.join(" ");


    }
    else {
        misses.push(guess);
        remaining--;
        console.log(remaining);
        console.log(misses);
    }
    document.getElementById("misses").innerHTML=misses.join(" ");
    //   Log the correct answers and remaining guesses to the HTML
}


function gameOver() {
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + remaining);

    // document.getElementById("remaining").innerHTML = remaining;
    // document.getElementById("scores").innerHTML = scores;
    // document.getElementById("misses").innerHTML = misses;

    if (letters.toString() == scores.toString()) {
        wins++;
        alert("Winner!");

        document.getElementById("wins").innerHTML = wins;
        // restart game
        start();
    }
    else if (remaining == 0) {
        losses++;
        alert("You Crash, You Die!");
        document.getElementById("losses").innerHTML = losses;
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
    gameOver();
}