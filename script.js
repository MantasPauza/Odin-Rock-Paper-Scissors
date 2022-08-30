const scoreContainer = document.querySelector(".score_container");
const outputContainer = document.querySelector(".output_container");
const selectionContainer = document.querySelector(".selection_container");
const titleContainer = document.querySelector(".title_container");
const title = document.querySelector(".title");
const buttons = document.querySelectorAll(".selection");
const playerScore = document.querySelector(".score_text_player");
const computerScore = document.querySelector(".score_text_computer");
const output = document.querySelector(".output");
const playButton = document.querySelector("#play");

console.log(getComputerChoise());
computerSelection = getComputerChoise();

let playerResult = 0;
let computerResult = 0;

playButton.addEventListener("click", function () {
  scoreContainer.style.display = "flex";
  outputContainer.style.display = "flex";
  selectionContainer.style.display = "flex";
  titleContainer.style.display = "none";
  output.textContent = ``;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.textContent;
    console.log(playerSelection);
    computerSelection = getComputerChoise();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);

    if (playerResult === 5 || computerResult === 5) {
      returnWinner();
    }
  });
});

function returnWinner() {
result = '';
  if (playerResult > computerResult) {
    result = "Congratulations! You win!";
  } else if (computerResult > playerResult) {
    result = "Aww too bad! You lose!";
  }

  playerScore.textContent = 0;
  computerScore.textContent = 0;
  playerResult = 0;
  computerResult = 0;

  scoreContainer.style.display = "none";
  outputContainer.style.display = "none";
  selectionContainer.style.display = "none";
  titleContainer.style.display = "flex";
  title.innerHTML = `${result} <br> Do you want to play again?`;
    return result;
}

function getComputerChoise() {
  const choises = ["rock", "paper", "scissors"];
  const computerChoises = choises.map(
    (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
  );
  return computerChoises[Math.floor(Math.random() * computerChoises.length)];
}

function playRound(playerSelection, computerSelection) {
  result = "";
  if (playerSelection === computerSelection) {
    result = "Tie";
    output.textContent = `It's a tie!`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    result = "You lose!";
    output.textContent = `Aww, ${computerSelection} wins over ${playerSelection}!`;
    computerResult++;
    computerScore.textContent = computerResult;
  } else {
    result = "You win!";
    playerResult++;
    playerScore.textContent = playerResult;
    output.textContent = `Congratulations! ${playerSelection} wins over ${computerSelection}!`;
  }
  console.log(result);
  return result;
}
