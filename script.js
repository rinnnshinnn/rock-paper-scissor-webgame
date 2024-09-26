document.addEventListener("DOMContentLoaded", () => {
    // Define possible choices for the game
    const choices = ["rock", "paper", "scissors"];
    let humanScore = 0, computerScore = 0;

    // Get references to the DOM elements where results and scores will be displayed
    const result = document.querySelector("#result");
    const scoreBoard = document.querySelector("#scoreboard");
    const buttons = document.querySelectorAll("#choices button");

    // Function to randomly select a choice for the computer
    const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

    // Function to check if either player has won the game (first to 5 points)
    const determineWinner = (humanScore, computerScore) => {
        if (humanScore === 5) return "Human wins the game!";
        if (computerScore === 5) return "Computer wins the game!";
        return null;
    };

    // Function to update the scoreboard display
    const updateScoreBoard = () => {
        scoreBoard.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
    };

    // Function to handle the game logic for a single round
    const playRound = (humanChoice) => {
        // Disable buttons to prevent multiple inputs during a round
        buttons.forEach(button => button.disabled = true);
        const computerChoice = getComputerChoice();

        // Determine the result of the round
        if (humanChoice === computerChoice) {
            result.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie!`;
            result.className = 'tie';
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You win!`;
            result.className = 'win';
            humanScore++;
        } else {
            result.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You lose!`;
            result.className = 'lose';
            computerScore++;
        }

        // Update the scoreboard after each round
        updateScoreBoard();

        // Check if the game has a winner
        const winner = determineWinner(humanScore, computerScore);
        if (winner) {
            result.textContent = winner;
            setTimeout(() => {
                result.textContent = "Make your choice, brave warrior!";
                result.className = '';
            }, 1500);
            humanScore = 0;
            computerScore = 0;
            updateScoreBoard();
        }

        // Re-enable buttons after a short delay to allow the player to make another choice
        setTimeout(() => {
            buttons.forEach(button => button.disabled = false);
        }, 500);
    };

    // Event listener to handle player's choice input
    document.querySelector("#choices").addEventListener("click", (event) => {
        const choice = event.target.id;
        if (choices.includes(choice)) {
            playRound(choice);
        }
    });

    // Initialize the scoreboard when the page loads
    updateScoreBoard();
});