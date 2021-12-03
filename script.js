// Global variables to track scores and wins and such
let roundCounter = 0;
let maxRounds = 5;

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

// Function to handle the underlying game logic of RockPaperScissors
// Reads the textContent of the appropriate divs to get player/computer moves
// compares the strings with a simple conditional tree
// each round's winner is decided in the conditionals, and the appropriate
// score counter is incremented

const gameLogic = (player, computer) => {

    currentRound.style.display = 'block';
    if (player == computer) {
        currentRound.textContent = `Round ${roundCounter} Winner: IT'S A TIE`;
        return;
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

// 'main' function
// increments the roundCounter with each run (starts at 1 ofc)
// generates the computer's move with computerPlay() 
// and displays it alongside the player's move in the appropriate divs
// calls gameLogic() function to decide winner of each round.
// once roundCounter has reached the set amount, displays the final 
// scores and the winner of the game in a new div

const playRound = (player) => {

    document.getElementById('playing-for-rounds').textContent = `Playing till ${maxRounds} points!`
    roundCounter++;
    
    computer = computerPlay();
    console.log(player);
    playerMove = document.getElementById('your-move');
    computerMove = document.getElementById('computer-move');
    playerMove.textContent = `YOU'VE CHOSEN: ${player.toUpperCase()}`
    computerMove.textContent = `THEY'VE CHOSEN: ${computer.toUpperCase()}`

    gameLogic(player, computer);
    console.log(playerWinCounter.value);

    if (playerWinCounter.value == maxRounds)
        finalScore.appendChild(document.createTextNode("You have won the game!"))
    if (computerWinCounter.value == maxRounds) 
        finalScore.appendChild(document.createTextNode("The computer has won the game!"))
};

// Event handler for the process for a user to set how many
// points they need to win
const startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', () => {
    maxRounds = document.getElementById('max-rounds-selector').value;
});

// player move button event listeners
// decides the player's move based on which button they click
const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    playRound('rock');
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    playRound('paper');
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    playRound('scissors');
});

// 'Play Again?' button. Resets everything to its default state
// so another game can be played.
const reset = document.getElementById('reset-button');

reset.addEventListener('click', () => {
    roundCounter = 0;
    computerWinCounter.value = 0;
    playerWinCounter.value = 0;
    finalScore.innerText = "";
    currentRound.style.display = "none";
    document.getElementById('your-move').textContent = "";
    document.getElementById('computer-move').textContent = "";
    document.getElementById('playing-for-rounds').textContent = "";
    document.getElementById('max-rounds-selector').value = 5;
});


