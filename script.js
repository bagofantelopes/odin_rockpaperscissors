// Global variables to track scores and wins and such
let roundCounter = 0;
let maxRounds = 5;
let tieCounter = 0;

const playerWinCounter = document.getElementById('player-score');
const computerWinCounter = document.getElementById('computer-score');
const currentRound = document.getElementById('current-round');
const finalScore = document.getElementById('final-score');


// Decide the computer's move with a simple random number generator
// based on a string array of the possible moves in RockPaperScissors
const computerPlay = () => {
    const moves = ['rock', 'paper', 'scissors']
    let num = Math.floor(Math.random() * (moves.length - 0) + 0);
    return moves[num];
}

// should be setting the maxRounds variable based on user input
// but is presently fubar
const selectRounds = () => {
    maxRounds = document.getElementById('max-rounds-selector');
    console.log(maxRounds.target.value);
}

// 'main' function
// increments the roundCounter with each run (starts at 1 ofc)
// generates the computer's move with computerPlay() 
// and displays it alongside the player's move in the appropriate divs
// calls gameLogic() function to decide winner of each round.
// once roundCounter has reached the set amount, displays the final 
// scores and the winner of the game in a new div

const playRound = (player) => {
    roundCounter++;
    
    computer = computerPlay();

    playerMove = document.getElementById('your-move');
    computerMove = document.getElementById('computer-move');
    playerMove.textContent = `You play: ${player.toLowerCase()}`
    computerMove.textContent = `Computer Plays: ${computer}`

    gameLogic(player.toLowerCase(), computer);

    if (roundCounter >= maxRounds) {
        finalScore.innerText = `You have won ${playerWinCounter.value} rounds and the computer has won ${computerWinCounter.value} rounds. \n `+
                                `Also, ${tieCounter} rounds ended in a tie. `;
        if (playerWinCounter.value > computerWinCounter.value) {
            finalScore.appendChild(document.createTextNode("You have won the game!"))
        } else if (computerWinCounter.value > playerWinCounter.value) {
            finalScore.appendChild(document.createTextNode("The computer has won the game!"))
        } else {
            finalScore.appendChild(document.createTextNode("Looks like this game was a tie!"))
        }
    }
}


// Function to handle the underlying game logic of RockPaperScissors
// Reads the textContent of the appropriate divs to get player/computer moves
// compares the strings with a simple conditional tree
// each round's winner is decided in the conditionals, and the appropriate
// score counter is incremented

const gameLogic = (player, computer) => {
    console.log('player: ' + player);
    console.log('computer: ' + computer);
    currentRound.style.display = 'block';
    if (player == computer) {
        tieCounter++;
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


// Event handler for the process for a user selecting how many
// rounds they want to play. currently fubar and wip
let startBtn = document.getElementById('start-button');
//startBtn.addEventListener('click', selectRounds);
startBtn.addEventListener('click', (e) => {
    console.log(e.target.value);
})

// player move button event listeners
// decides the player's move based on which button they click
const buttons = document.querySelectorAll('#move-container');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent);
    });
});

const reset = document.getElementById('reset-button');


// 'Play Again?' button. Resets everything to its default state
// so another game can be played.
reset.addEventListener('click', () => {
    roundCounter = 0;
    computerWinCounter.value = 0;
    playerWinCounter.value = 0;
    finalScore.innerText = "";
    currentRound.style.display = "hidden";
})