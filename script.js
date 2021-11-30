// Global variables to track wins and hold the possible moves in the game
const moves = ['rock', 'paper', 'scissors']
let playerWinCounter = 0;
let computerWinCounter = 0;

// Function to decide the computer's move with a simple random number generator
const computerPlay = () => {
    let num = Math.floor(Math.random() * (moves.length - 0) + 0);
    return moves[num];
}

// Function to prompt the user for input.
const playerPlay = () => {
    let move = prompt("Choose rock, paper, or scissors:  ");
    move.toLowerCase();
    return move;
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
        computerWinCounter += 1;
        return "The computer wins this round.";
    } else if (player == 'rock' && computer == 'scissors') {
        playerWinCounter += 1;
        return "You win this round.";
    } else if (player == 'paper' && computer == 'rock') {
        playerWinCounter += 1;
        return "You win this round.";
    } else if (player == 'paper' && computer == 'scissors') {
        computerWinCounter += 1;
        return "The computer wins this round.";
    } else if (player == 'scissors' && computer == 'paper') {
        playerWinCounter += 1;
        return "You win this round.";
    } else if (player == 'scissors' && computer == 'rock') {
        computerWinCounter += 1;
        return "The computer wins this round.";
    }

}

/*
Function to run each round of the game. Generates the moves for player and computer
based on function calls and runs those variable through the gameLogic function. 
Prints results of gameLogic() to console.
*/
const playRound = () => {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    console.log(`The computer has chosen: ${computerSelection}`);
    console.log(`You have chosen: ${playerSelection}`);

    console.log(gameLogic(playerSelection, computerSelection));
}

// 'main' function. Runs the game. Prompts user for number of rounds and prints final results to console.
const game = () => {
    rounds = prompt("How many rounds do you want to play?")
    for (let i = 0; i < rounds; i++)
        playRound();

    console.log(`You have won ${playerWinCounter} rounds and the computer has won ${computerWinCounter} rounds.`)
    if (playerWinCounter > computerWinCounter) {
        console.log("You have won the game!")
    } else if (computerWinCounter > playerWinCounter) {
        console.log("The computer has won the game!")
    } else {
        console.log("Looks like a tie this time!")
    }
}

// run ze game!
game();