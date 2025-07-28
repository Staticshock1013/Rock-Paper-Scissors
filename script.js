let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 0.33) return "rock";
  else if (randomNum < 0.66) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");
  const winnerDiv = document.getElementById("winner");

  if (humanScore >= 5 || computerScore >= 5) {
    return; // Game already over
  }

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    winnerDiv.textContent = humanScore === 5 
      ? "🎉 You won the game!" 
      : "💻 Computer won the game!";
  }
}

// Event Listeners for Buttons
document.getElementById("rock").addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById("paper").addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById("scissors").addEventListener('click', () => playRound('scissors', getComputerChoice()));
