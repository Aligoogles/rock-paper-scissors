

function startGame () {
    document.getElementById("start").style.display = "none";
    document.getElementById("selection").style.display = "block";
}

function playGame(input) {
    var result;
var playerChoice = input;
var computerOptions = ['rock', 'paper', 'scissors'];
var computerChoice = computerOptions[Math.floor(Math.random()*3)];

if (playerChoice == 'rock' && computerChoice === 'scissors' ) {
    result = "Winner";
}
else if (playerChoice == 'rock' && computerChoice == 'paper' ) {
    result = "Loser";
}
else if (playerChoice == 'paper' && computerChoice == 'rock' ) {
    result = "Winner";
}
else if (playerChoice == 'paper' && computerChoice == 'scissors' ) {
    result = "Loser";
}
else if (playerChoice == 'scissors' && computerChoice == 'rock' ) {
    result = "Loser";
}
else if (playerChoice == 'scissors' && computerChoice == 'paper' ) {
    result = "Winner";
}
else if (playerChoice == computerChoice) {
    result = "Winner";
}
document.getElementById("choicePlayer").innerHTML = playerChoice;
document.getElementById("choiceComp").innerHTML = computerChoice;
document.getElementById("result-text").innerHTML = result;
document.getElementById("player").style.display = "block";
document.getElementById("computer").style.display = "block";
document.getElementById("result-text").style.display = "block";
}