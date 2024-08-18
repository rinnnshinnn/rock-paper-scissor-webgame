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