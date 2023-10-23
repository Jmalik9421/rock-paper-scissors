const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const getComputerChoice = () => {
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

const playRound = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        result = 'Draw';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection == 'paper')
        ) {
            result = 'Player wins';
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors')
        || (computerSelection === 'paper' && playerSelection === 'rock')
        || (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
      result = 'Computer wins';
    } 
    
    return result;
};

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
})

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
})

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
})