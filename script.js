const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

playerScore = 0;
computerScore = 0;
round = 1;

const getComputerChoice = () => {
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

const playRound = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        result = 'draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection == 'paper')
    ) {
        result = 'player wins';
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors')
        || (computerSelection === 'paper' && playerSelection === 'rock')
        || (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
      result = 'computer wins';
    } 

    if (result === 'draw') {
        console.log('draw');
    } else if (result === 'player wins') {
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        computerScore++;
        computerScoreText.textContent = computerScore; 
    }
    
    return result;  
};

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    if (round <= 5) {
        playRound(playerSelection, computerSelection);
        round++;
    } else {
        let gameOverMsg;
        if (playerScore > computerScore) {
            gameOverMsg = 'Player wins. Thanks for playing';
        } else {
            gameOverMsg = 'Computer wins. Thanks for playing';
        }
        alert(gameOverMsg);
    }
})

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    if (round <= 5) {
        playRound(playerSelection, computerSelection);
        round++;
    }
})

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    if (round <= 5) {
        playRound(playerSelection, computerSelection);
        round++;
    }
})

