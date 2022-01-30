const gameChoices = new Map();
gameChoices.set("rock", "👊");
gameChoices.set("paper", "📜");
gameChoices.set("scissors", "✂️");
const winString = 'win';
const loseString = 'lose';
const drawString = 'draw';

function getComputerPlay() {
  const randChoice = Math.floor(Math.random() * 3);
  if (randChoice === 0) return gameChoices.get("rock");
  else if (randChoice === 1) return gameChoices.get("paper");
  else return gameChoices.get("scissors");
}

function playRound(player, computer, playerSelction, computerSelction) {
  if (playerSelction === '👊') {
    if (computerSelction === '📜') {
      computer.score++;
      return loseString;
    } else if (computerSelction === '✂️') {
      player.score++;
      return winString;
    } else {
      return drawString;
    }
  } else if (playerSelction === '📜') {
    if (computerSelction === '✂️') {
      computer.score++;
      return loseString;
    } else if (computerSelction === '👊') {
      player.score++;
      return winString;
    } else {
      return drawString;
    }
  } else if (playerSelction === '✂️') {
    if (computerSelction === '👊') {
      computer.score++;
      return loseString;
    } else if (computerSelction === '📜') {
      player.score++;
      return winString;
    } else {
      return drawString;
    }
  } else {
    console.log("Error: Player selction was not 👊, 📜 or ✂️.");
    return 'error';
  }
}

function updateScores(player, computer) {
  player.scoreText.textContent = player.score;
  computer.scoreText.textContent = computer.score;
}

function displayChoices(player, computer, playerChoice) {
  const computerChoice = getComputerPlay();
  player.choiceDisplay.textContent = playerChoice;
  computer.choiceDisplay.textContent = computerChoice;
  playRound(player, computer, playerChoice, computerChoice);
  updateScores(player, computer);
}

function resetGame(player, computer) {
  player.score = 0;
  player.scoreText.textContent = 0;
  player.choiceDisplay.textContent = "👊📜✂️";

  computer.score = 0;
  computer.scoreText.textContent = 0;
  computer.choiceDisplay.textContent = "👊📜✂️";

}

function startGame() {
  const rockBtn = document.querySelector("#rockBtn");
  const paperBtn = document.querySelector("#paperBtn");
  const scissorsBtn = document.querySelector("#scissorsBtn");
  const resetBtn = document.querySelector("#resetBtn");

  const player = {
    score: 0,
    scoreText: document.querySelector("#player-score-display"),
    choiceDisplay: document.querySelector("#player-choice-display")
  };

  const computer = {
    score: 0,
    scoreText: document.querySelector("#computer-score-display"),
    choiceDisplay: document.querySelector("#computer-choice-display")
  };


  rockBtn.addEventListener("click", onBtnClick);
  paperBtn.addEventListener("click", onBtnClick);
  scissorsBtn.addEventListener("click", onBtnClick);

  function onBtnClick(event) {
    if (event.target === rockBtn) {
      console.log("👊");
      displayChoices(player, computer, "👊");
    } else if (event.target === paperBtn) {
      console.log("📜");
      displayChoices(player, computer, "📜");
    } else if (event.target === scissorsBtn) {
      console.log("✂️");
      displayChoices(player, computer, "✂️");
    } else {
      console.log("Unknown Button click Event");
    }
  }

  resetBtn.addEventListener("click", () => {
    resetGame(player, computer);
  });
}

startGame();