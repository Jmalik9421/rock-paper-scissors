function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection == "paper")
        ) {
            return "Player wins";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      return "Computer wins";
    } 
}

function game(rounds) {
    for (let currentRound = 1; currentRound <= rounds; currentRound++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game(5);