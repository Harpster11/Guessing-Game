// create variables
var planes = ["at6", "b26", "dc3", "pt19", "737", "a340", "h4"];
var photo = ["images/AT-6C_Texans_in_flight_1943.jpg", "images/B_26.jpg", "images/2018-DC3-1-LR.jpg", "images/csm_fairchild-003_9cae6a3a68.jpg", "images/737_American.jpg", "images/Airbus_A340-311.jpg", "images/H-4_Hercules_2.jpg"];
var mfg = ["northamerican", "martin", "douglas", "fairchild", "boeing", "airbus", "hughes"];
var nick = ["texan", "maurader", "gooneybird", "cradle", "fatalbert", "lowrider", "hercules"]
var answer = "";
var mfgAnswer = "";
var nickAnswer = "";
var scoresMfg = [];
var scoresNick = [];
var lettersMfg = [];
var lettersNick = [];
var letters = [];
var misses = [];
var scores = [];
var blanks = 0;
var mfgBlanks = 0;
var nickBlanks = 0;
var remaining = 19;
var wins = 0;
var losses = 0;
var rankDex = 0;
var rank = ["Cadet", "Private First Class", "Corporal", "Sergeant", "Staff Sergeant", "Technical Sergeant", "First Sergeant"]

// create random word selector function

function start() {
    answer = planes[Math.floor(Math.random() * planes.length)];
    photoDex =  planes.indexOf(answer);
    mfgAnswer = mfg[photoDex];
    nickAnswer = nick[photoDex];
    console.log("Photo at: " + photoDex);
    console.log(answer);
    console.log(mfgAnswer);
    console.log(nickAnswer);
    letters = answer.split("");
    console.log(letters);
    blanks = letters.length;
    lettersMfg = mfgAnswer.split("");
    mfgBlanks = lettersMfg.length;
    lettersNick = nickAnswer.split("");
    nickBlanks = lettersNick.length;
   
   



    misses = [];
    scores = [];
    scoresMfg = [];
    scoresNick = [];
    remaining = 19;
   
  

    // rewrite the HTML to reflect gameplay   

    for (var i = 0; i < blanks; i++) {
        // var underScore = document.createElement("span");
        // underScore.textContent = " _ ";
        // document.getElementById("answer").appendChild(underScore);
        scores.push("_");
        
        }
        for (var i = 0; i < mfgBlanks; i++) {
            // var underScore = document.createElement("span");
            // underScore.textContent = " _ ";
            // document.getElementById("answer").appendChild(underScore);
            scoresMfg.push("_");
            
            }
            for (var i = 0; i < nickBlanks; i++) {
                // var underScore = document.createElement("span");
                // underScore.textContent = " _ ";
                // document.getElementById("answer").appendChild(underScore);
                scoresNick.push("_");
                
                }
   
        document.getElementById("answerPlane").innerHTML = scores.join(" ");
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("image").setAttribute("src", photo[photoDex]);
        document.getElementById("answerMfg").innerHTML = scoresMfg.join(" ");
        document.getElementById("answerNick").innerHTML = scoresNick.join(" ");
        document.getElementById("rank").innerHTML = rank[rankDex];

}



function checkAnswer(guess) {

    var letterGuess = false;
    for (var i = 0; i < blanks; i++) {
        if (letters[i] == guess) {
            letterGuess = true;
            console.log("Airplane Letter Found" + guess);
            console.log(letterGuess);
        }
    }
    for (var i = 0; i < mfgBlanks; i++) {
        if (lettersMfg[i] == guess) {
            letterGuess = true;
            console.log("Manufacturer Letter Found" + guess);
            console.log(letterGuess);
        }
    }
    for (var i = 0; i < nickBlanks; i++) {
        if (lettersNick[i] == guess) {
            letterGuess = true;
            console.log("Nickname Letter Found" + guess);
            console.log(letterGuess);
        }
    }

    if(letterGuess) {
        for (var i = 0; i < blanks; i++) {

            if (letters[i] == guess) {
                console.log("Airplane guess: " + guess);
                scores[i] = guess;
                console.log(scores);
            }
            for (var j = 0; j < mfgBlanks; j++) {

                if (lettersMfg[j] == guess) {
                    console.log("Manufacturer guess: " + guess);
                    scoresMfg[j] = guess;
                    console.log(scoresMfg);
                }
                for (var k = 0; k < nickBlanks; k++) {

                    if (lettersNick[k] == guess) {
                        console.log("Nickname guess: " + guess);
                        scoresNick[k] = guess;
                        console.log(scores);
                    }
        }
        document.getElementById("answerPlane").innerHTML=scores.join(" ");
        document.getElementById("answerMfg").innerHTML=scoresMfg.join(" ");
        document.getElementById("answerNick").innerHTML=scoresNick.join(" ");





    }}}
    else {
        misses.push(guess);
        remaining--;
        console.log(remaining);
        document.getElementById("remaining").innerHTML = remaining;
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

    if (letters.toString() == scores.toString() && lettersMfg.toString() == scoresMfg.toString() && lettersNick.toString() == scoresNick.toString()) {
        wins++;
        alert("Winner! Enjoy your promotion");
        
 
        document.getElementById("wins").innerHTML = wins;

        if (rankDex < 6){
        rankDex++;
        document.getElementById("rank").innerHTML = rank[rankDex]; 
        }

        alert("Winner! Enjoy your promotion to",rank[rankDex]);

        // restart game
        start();
    }
    
    else if (remaining == 0) {
        losses++;
        alert("You Crash, You Die!");
        document.getElementById("losses").innerHTML = losses;
        if (rankDex > 0) {
            rankDex--;
            document.getElementById("rank").innerHTML = rank[rankDex];
        }


        start();
    }

}




// run game
start();

// keyboard functions

document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Guess:",guess);
    checkAnswer(guess); 
    gameOver();
}