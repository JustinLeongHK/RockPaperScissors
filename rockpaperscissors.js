// getComputerChoice() - computer to randomly return either rock/paper/scissors.
// playRound() - takes 2 parameter playerSelection and computerSelection and declares the winner either player/computer/0.
// game() - call playRound() and play 5 rounds and reports the winner or loser at the end.

let player_score = 0;
let computer_score = 0;
let tie_score = 0;
let rounds = 0;

const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");
const tie = document.querySelector(".tie");
const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const playerImage = document.querySelector(".playerChoice");
const computerImage = document.querySelector(".computerChoice");
const playerWindow = document.querySelector(".player");
const computerWindow = document.querySelector(".computer");

const pImage = document.createElement("img");
const cImage = document.createElement("img");

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choice[random];
}

function playRound(playerSelection, computerSelection) {
  let x = playerSelection.toLowerCase();
  let y = computerSelection;

  if (x == "rock" && y == "scissors") {
    return "player";
  } else if (x == "scissors" && y == "paper") {
    return "player";
  } else if (x == "paper" && y == "rock") {
    return "player";
  } else if (y == x) {
    return 0;
  } else {
    return "computer";
  }
}

function update(winner) {
  if (winner == "player") {
    player_score++;
    player.textContent = player_score;
  } else if (winner == "computer") {
    computer_score++;
    computer.textContent = computer_score;
  } else {
    tie_score++;
    tie.textContent = tie_score;
  }
}

// Define a function to handle clicks on the choices
function handleChoiceClick(choice) {
  if (rounds > 4) {
    //printWinner();
    // Remove the click event listener from each choice
    choices.forEach((choice) => {
      choice.removeEventListener("click", handleChoiceClick);
    });
    return 0;
  }

  playerChoice = choice.getAttribute("data-choice");
  computerChoice = getComputerChoice();

  updateImage(playerChoice, computerChoice);
  winner = playRound(playerChoice, computerChoice);
  update(winner);
  resizing(winner);

  rounds++;

  printWinner();
}

function game() {
  // Add the click event listener to each choice
  choices.forEach((choice) => {
    choice.addEventListener("click", () => handleChoiceClick(choice));
  });
}

function printWinner() {
  if (rounds == 5) {
    if (player_score > computer_score) {
      result.textContent = "You Won !";
    } else if (computer_score > player_score) {
      result.textContent = "You Lost !";
    } else {
      result.textContent = "Its a Tie !";
    }
  } else {
    return 0;
  }
}

function updateImage(playerSelection, computerSelection) {
  pImage.classList.add("imagePlacement");
  cImage.classList.add("imagePlacement");

  // Update player image
  if (playerSelection == "rock") {
    pImage.src = "images/rock.png";
    pImage.alt = "rock";
  } else if (playerSelection == "paper") {
    pImage.src = "images/paper.png";
    pImage.alt = "paper";
  } else if (playerSelection == "scissors") {
    pImage.src = "images/scissors.png";
    pImage.alt = "scissors";
  }

  // Update computer image
  if (computerSelection == "rock") {
    cImage.src = "images/rock.png";
    cImage.alt = "rock";
  } else if (computerSelection == "paper") {
    cImage.src = "images/paper.png";
    cImage.alt = "paper";
  } else if (computerSelection == "scissors") {
    cImage.src = "images/scissors.png";
    cImage.alt = "scissors";
  }

  if (rounds > 0) {
    playerImage.removeChild(pImage);
    computerImage.removeChild(cImage);
  }

  playerImage.appendChild(pImage);
  computerImage.appendChild(cImage);
}

// Resizing the window to display winner and loser.  
function resizing(winner) {
  if (playerWindow.classList.contains("win")) {
    playerWindow.classList.remove("win");
  }
  if (playerWindow.classList.contains("lose")) {
    playerWindow.classList.remove("lose");
  }
  if (computerWindow.classList.contains("win")) {
    computerWindow.classList.remove("win");
  }
  if (computerWindow.classList.contains("lose")) {
    computerWindow.classList.remove("lose");
  }

  if (winner == "player") {
    playerWindow.classList.add("win");
    computerWindow.classList.add("lose");
  } else if (winner == "computer") {
    playerWindow.classList.add("lose");
    computerWindow.classList.add("win");
  }
}

game();
