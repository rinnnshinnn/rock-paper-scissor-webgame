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
