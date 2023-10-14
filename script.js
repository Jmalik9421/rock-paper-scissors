function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

/*
rock
paper
scissors

Possibilites:
rock vs rock = draw 
                            rock vs paper = rock loses
                            rock vs scissors = rock wins

                            paper vs rock = paper wins
paper vs paper = draw
                            paper vs scissors = paper loses

                            scissors vs rock = rock wins
                            scissors vs paper = scissors wins
scissors vs scissors = scissors draws 


draws:
rock vs rock
paper vs paper
scissors vs scissors

wins:
rock vs scissors = rock wins
scissors vs paper = scissors wins
paper vs rock = paper wins

losses:
rock vs paper = rock loses
paper vs scissors = paper loses
scissors vs rock = rock loses
*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { // define draw
        console.log("Draw");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection == "paper")
        ) {
            return "Player wins"
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")
    ) {
      return "Computer wins"
    } 
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
