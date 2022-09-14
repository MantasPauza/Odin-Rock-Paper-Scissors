const body = document.querySelector("body");
const pyro = document.querySelector("#pyro");
const scoreContainer = document.querySelector(".score_container");
const outputContainer = document.querySelector(".output_container");
const selectionContainer = document.querySelector(".selection_container");
const titleContainer = document.querySelector(".title_container");
const title = document.querySelector(".title");
const buttons = document.querySelectorAll(".selection");
const playerScore = document.querySelector(".score_text_player");
const computerScore = document.querySelector(".score_text_computer");
const output = document.querySelector(".output");
const subOutput = document.querySelector(".sub_output");
const playButton = document.querySelector("#play");

computerSelection = getComputerChoise();

let playerResult = 0;
let computerResult = 0;

playButton.addEventListener("click", function () {
  scoreContainer.style.display = "flex";
  outputContainer.style.display = "flex";
  outputContainer.style.flexDirection = "column";
  selectionContainer.style.display = "flex";
  outputContainer.style.textAlign = "center";
  subOutput.style.textAlign = "center";
  titleContainer.style.display = "none";
  output.textContent = ``;
  subOutput.textContent = ``;
  pyro.classList.remove("pyro");
  playButton.style.display = "none";
  title.classList.add("animate__fadeInDown");
  title.classList.remove("animate__hinge");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoise();
    playRound(playerSelection, computerSelection);

    if (playerResult === 5) {
      changeContainerStyle();
      title.classList.add("animate__fadeInDown");
      title.classList.remove("animate__hinge");
    }
    if (computerResult === 5) {
      title.classList.remove("animate__fadeInDown");
      title.classList.add("animate__hinge");
    }
    if (playerResult === 5 || computerResult === 5) {
      returnWinner();
    }
  });
});

function returnWinner() {
  result = "";
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
  playButton.style.display = "block";
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
    output.style.color = "black";
    output.textContent = `It's a tie!`;
    subOutput.textContent = `You both chose ${playerSelection}!`;
    subOutput.style.fontSize = "12px";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    result = "You lose!";
    output.style.color = "red";
    output.textContent = `Aww, ${computerSelection} wins over ${playerSelection}! :(`;
    subOutput.textContent = `Computer chose ${computerSelection} and you chose ${playerSelection}.`;
    subOutput.style.fontSize = "12px";
    computerResult++;
    computerScore.textContent = computerResult;
  } else {
    result = "You win!";
    playerResult++;
    playerScore.textContent = playerResult;
    output.style.color = "green";
    output.textContent = `Congratulations! ${playerSelection} wins over ${computerSelection}! :)`;
    subOutput.textContent = `Computer chose ${computerSelection} and you chose ${playerSelection}.`;
    subOutput.style.fontSize = "12px";
  }
  return result;
}

function changeContainerStyle() {
  pyro.classList.toggle("pyro");
}
