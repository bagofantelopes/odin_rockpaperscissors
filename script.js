// player move button event listeners
const buttons = document.querySelectorAll('#move-container')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        playRound(e.target.textContent);
    });
});

// Global variables to track wins and hold the possible moves in the game
const moves = ['rock', 'paper', 'scissors']
let roundCounter = 0;
let playerWinCounter = document.getElementById('player-score');
let computerWinCounter = document.getElementById('computer-score');



// Function to decide the computer's move with a simple random number generator
const computerPlay = () => {
    let num = Math.floor(Math.random() * (moves.length - 0) + 0);
    return moves[num];
}

/* 
Function to handle the obnoxious conditional tree. 
(I think a switch statement might technically be better here but I hate them)
Also increments the global win counter for player and computer.
*/
const gameLogic = (player, computer) => {
    if (player == computer) {
        return "This round is a tie.";
    } else if (player == 'rock' && computer == 'paper') {
        computerWinCounter.textContent += '|';
        return "The computer wins this round.";
    } else if (player == 'rock' && computer == 'scissors') {
        playerWinCounter.textContent += '|';
        return "You win this round.";
    } else if (player == 'paper' && computer == 'rock') {
        playerWinCounter.textContent += '|';
        return "You win this round.";
    } else if (player == 'paper' && computer == 'scissors') {
        computerWinCounter.textContent += '|';
        return "The computer wins this round.";
    } else if (player == 'scissors' && computer == 'paper') {
        playerWinCounter.textContent += '|';
        return "You win this round.";
    } else if (player == 'scissors' && computer == 'rock') {
        computerWinCounter.textContent += '|';
        return "The computer wins this round.";
    }

}

/*
Function to run each round of the game. Generates the moves for player and computer
based on function calls and runs those variable through the gameLogic function. 
Prints results of gameLogic() to console.
*/
const playRound = (player) => {
    roundCounter++;
    let computerSelection = computerPlay();
    let playerSelection = player.toLowerCase();

    computerMove = document.getElementById('computer-move');
    playerMove = document.getElementById('your-move');
    computerMove.textContent = `The computer has chosen: ${computerSelection}`
    playerMove.textContent = `You have chosen: ${playerSelection}`

    console.log(gameLogic(playerSelection, computerSelection));
    if (roundCounter >= 5) {
        console.log(`You have won ${playerWinCounter.textContent.length} rounds and the computer has won ${computerWinCounter} rounds.`)
        if (playerWinCounter > computerWinCounter) {
            console.log("You have won the game!")
        } else if (computerWinCounter > playerWinCounter) {
            console.log("The computer has won the game!")
        } else {
            console.log("Looks like a tie this time!")
        }
    }
}

const computerScores = () => {

}

const playerScores = () => {

}