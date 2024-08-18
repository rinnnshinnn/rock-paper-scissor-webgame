console.log(getCOmputerChoice());

function getCOmputerChoice() {
    const choice = Math.round(Math.random() * 3);
    
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        return "Invalid choice!"; 
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        alert("Invalid choice! Please enter 'rock', 'paper', or'scissors'.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win!`);
        humanScore++;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissor") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose!`);
        computerScore++;
    } else {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie!`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getCOmputerChoice();

playRound(humanSelection, computerSelection);