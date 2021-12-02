// Global variables to track wins and hold the possible moves in the game
const moves = ['rock', 'paper', 'scissors']
let roundCounter = 0;
let maxRounds = 5;

const playerWinCounter = document.getElementById('player-score');
const computerWinCounter = document.getElementById('computer-score');
const currentRound = document.getElementById('current-round');
const finalScore = document.getElementById('final-score');


// Function to decide the computer's move with a simple random number generator
const computerPlay = () => {
    let num = Math.floor(Math.random() * (moves.length - 0) + 0);
    return moves[num];
}

const selectRounds = () => {
    maxRounds = document.getElementById('max-rounds-selector');
    console.log(maxRounds.target.value);
}

/*
Function to run each round of the game. Generates the moves for player and computer
based on function calls and runs those variable through the gameLogic function. 
Prints results of gameLogic() to console.
*/
const playRound = (player) => {
    roundCounter++;
    
    computer = computerPlay();

    playerMove = document.getElementById('your-move');
    computerMove = document.getElementById('computer-move');
    playerMove.textContent = `You play: ${player.toLowerCase()}`
    computerMove.textContent = `Computer Plays: ${computer}`

    gameLogic(player.toLowerCase(), computer);

    if (roundCounter >= maxRounds) {
        finalScore.innerText = `You have won ${playerWinCounter.value} rounds and the computer has won ${computerWinCounter.value} rounds. `
        if (playerWinCounter.value > computerWinCounter.value) {
            finalScore.appendChild(document.createTextNode("You have won the game!"))
        } else if (computerWinCounter.value > playerWinCounter.value) {
            finalScore.appendChild(document.createTextNode("The computer has won the game!"))
            console.log("The computer has won the game!")
        } else {
            finalScore.appendChild(document.createTextNode("Looks like a tie this time!"))
            console.log("Looks like a tie this time!")
        }
    }
}

/* 
Function to handle the obnoxious conditional tree. 
(I think a switch statement might technically be better here but I hate them)
Also increments the global win counter for player and computer.
*/
const gameLogic = (player, computer) => {
    console.log('player: ' + player);
    console.log('computer: ' + computer);
    currentRound.style.display = 'block';
    if (player == computer) {
        currentRound.textContent = `Round ${roundCounter} Winner: IT'S A TIE`;
    } else if (player == 'rock' && computer == 'paper') {
        computerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: THE COMPUTER!`;
    } else if (player == 'rock' && computer == 'scissors') {
        playerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: YOU!`;
    } else if (player == 'paper' && computer == 'rock') {
        playerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: YOU!`;
    } else if (player == 'paper' && computer == 'scissors') {
        computerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: THE COMPUTER!`;
    } else if (player == 'scissors' && computer == 'paper') {
        playerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: YOU!`;
    } else if (player == 'scissors' && computer == 'rock') {
        computerWinCounter.value++;
        currentRound.textContent = `Round ${roundCounter} Winner: THE COMPUTER!`;
    }

}

let startBtn = document.getElementById('start-button');
//startBtn.addEventListener('click', selectRounds);
startBtn.addEventListener('click', (e) => {
    console.log(e.target.value);
})

// player move button event listeners
const buttons = document.querySelectorAll('#move-container');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.textContent);
        playRound(e.target.textContent);
    });
});

const reset = document.getElementById('reset-button');

reset.addEventListener('click', () => {
    roundCounter = 0;
    computerWinCounter.value = 0;
    playerWinCounter.value = 0;
    finalScore.innerText = "";
    currentRound.style.display = "hidden";
})