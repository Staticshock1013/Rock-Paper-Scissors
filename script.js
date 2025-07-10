console.log("Hello World")

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
 const input = prompt ("Whats Your Choice") // Ask the user for input
 .toLowerCase()
 return input.toLowerCase () // Convert it to lowercase
 // Return it
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
let humanScore = 0;
let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

    function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors";
  }

  // Play 5 rounds
  const humanChoice1 = prompt("Round 1: Rock, Paper, or Scissors?");
  playRound(humanChoice1, getComputerChoice());

  const humanChoice2 = prompt("Round 2: Rock, Paper, or Scissors?");
  playRound(humanChoice2, getComputerChoice());

  const humanChoice3 = prompt("Round 3: Rock, Paper, or Scissors?");
  playRound(humanChoice3, getComputerChoice());

  const humanChoice4 = prompt("Round 4: Rock, Paper, or Scissors?");
  playRound(humanChoice4, getComputerChoice());

  const humanChoice5 = prompt("Round 5: Rock, Paper, or Scissors?");
  playRound(humanChoice5, getComputerChoice());

    if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}
playGame();

