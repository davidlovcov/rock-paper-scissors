let humanScoreText;
let computerScoreText;
let humanScore;
let computerScore;
let humanImage;
let computerImage;
let currentRound;
let setRounds;
let roundOptionWindow;
let resultText;
let resultMessage;
let roundResult;

window.addEventListener('DOMContentLoaded', () => {
    humanScoreText = document.getElementById('human-score');
    computerScoreText = document.getElementById('computer-score');

    humanImage = document.getElementById('human-image');
    computerImage = document.getElementById('computer-image');

    currentRound = document.getElementById('current-round');

    roundOptionWindow = document.getElementById('round-option');

    resultText = document.getElementById('result-text');
    resultMessage = document.getElementById('result-message');

    roundResult = document.getElementById('round-result');

    humanScore = 0;
    computerScore = 0;
});

let round = 1;



function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.34) {
        return "rock";
    } else if (choice > 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(clickedImage) {
    let choice = clickedImage;
    console.log("it clicked " + choice);
    return choice;
}

function startTurn(humanChoice) {
    playRound(humanChoice, getComputerChoice());
}

function playRound(humanChoice, computerChoice) {
    humanImage.src = "./" + humanChoice + ".png";
    computerImage.src = "./" + computerChoice + ".png";

    if (humanChoice == computerChoice) {
        roundResult.innerHTML = "Draw!";
    } else {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            roundResult.innerHTML = "You win! Rock beats Scissors.";
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            roundResult.innerHTML = "You lose! Paper beats Rock.";
            computerScore++;
        }
    
        if (humanChoice == "paper" && computerChoice == "rock") {
            roundResult.innerHTML = "You win! Paper beats Rock.";
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            roundResult.innerHTML = "You lose! Scissors beats Paper.";
            computerScore++;
        }
    
        if (humanChoice == "scissors" && computerChoice == "paper") {
            roundResult.innerHTML = "You win! Scissors beats Paper.";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            roundResult.innerHTML = "You lose! Rock beats Scissors";
            computerScore++;
        }
    }
    humanScoreText.textContent = humanScore.toString();
    computerScoreText.textContent = computerScore.toString();
    round++;
    checkRound();
}

function checkRound() {
    if (round > setRounds) {
        if (humanScore > computerScore) {
            resultText.style.display = "flex";
            resultText.style.color = "greenyellow";
            resultMessage.textContent = "You won!";
        } else if (humanScore < computerScore) {
            resultText.style.display = "flex";
            resultText.style.color = "red";
            resultMessage.innerHTML = "You lost!";
        } else {
            resultText.style.display = "flex";
            resultText.style.color = "white";
            resultMessage.innerHTML = "It's a draw!";
        }
    } else {
        currentRound.textContent = "Round " + round;
    }   
}

function roundOption() {
    setRounds = document.getElementById('rounds').value;
    roundOptionWindow.style.display = "none";
    console.log(setRounds)
}

function restartGame() {
    resultText.style.display = "none";
    roundOptionWindow.style.display = "flex";
    humanScore = 0;
    humanScoreText.textContent = humanScore;
    computerScore = 0;
    computerScoreText.textContent = computerScore;
    round = 1;
    currentRound.textContent = "Round " + round;
    roundResult.innerHTML = "";
    humanImage.src = "";
    computerImage.src = "";
}