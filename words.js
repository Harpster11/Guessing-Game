// create variables
var words = ["Boeing","Airbus","Douglas","Cessna","Lockheed","Bombardier","Beechcraft","Embraer","Saab","ATR","BAE","Aerospatile","Fokker"];
var answer = "";
var letters = [];
var misses = [];
var scores = [];

// create functions

function start (   ) {
    computerGuess = words[Math.floor(Math.Random() * words.length)];
    letters = answer.split("");
    
}
// run game