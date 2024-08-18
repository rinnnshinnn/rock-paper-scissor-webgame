console.log(getCOmputerChoice()); // Log the computer's choice to the console

// Function to get a random computer choice
function getCOmputerChoice() {
    const choice = Math.floor((Math.random() * 3) + 1); // Generate a random number between 1 and 3
    
    // Return the corresponding choice based on the random number
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else if (choice === 3) {
        return "scissors";
    } else {
        return "Invalid choice!"; // This line is technically unreachable but added for completeness
    }
}

// Function to get the human player's choice
function getHumanChoice() {
    let choice = prompt("What's your choice?"); // Prompt the user for their choice

    if (choice === null) {
        alert("You canceled the game"); // Alert if the user cancels the prompt
        return null; // Return null if the game is canceled
    }

    // Validate the user's choice and return it in lowercase
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'."); // Alert if the choice is invalid
        return getHumanChoice(); // Prompt the user again for a valid choice
    }
}

let humanScore = 0; // Initialize the human player's score
let computerScore = 0; // Initialize the computer's score

// Function to play a single round of the game
function playRound() {
    const humanChoice = getHumanChoice(); // Get the human player's choice
    if (humanChoice === null) {
        return false; // End the round if the game was canceled
    }

    const computerChoice = getCOmputerChoice(); // Get the computer's choice

    // Determine the outcome of the round and update scores
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You win!`);
        humanScore++;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You lose!`);
        computerScore++;
    } else {
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie!`);
    }

    return true; // Indicate that the round was completed
}

// Function to play the game consisting of multiple rounds
function playGame() {
    // Play up to 5 rounds or until the game is canceled
    if (playRound()) {
        if (playRound()) {
            if (playRound()) {
                if (playRound()) {
                    if (playRound()) {
                        console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`); // Log the final score
                    }
                }
            }
        }
    }
}

playGame(); // Start the game
