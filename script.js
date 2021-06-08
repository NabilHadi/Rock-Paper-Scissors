const GAME_CHOICES = ['rock', 'paper', 'scissors'];
const RESULT_WIN_STR = 'win';
const RESULT_LOSE_STR = 'lose';
const RESULT_DRAW_STR = 'draw';

function getComputerPlay() {
  return GAME_CHOICES[Math.floor(Math.random() * GAME_CHOICES.length)];
}

function playRound(playerSelction, computerSelction) {
  if (playerSelction === 'rock') {
    if (computerSelction === 'paper') {
      return RESULT_LOSE_STR;
    } else if (computerSelction === 'scissors') {
      return RESULT_WIN_STR;
    } else {
      return RESULT_DRAW_STR;
    }
  } else if (playerSelction === 'paper') {
    if (computerSelction === 'scissors') {
      return RESULT_LOSE_STR;
    } else if (computerSelction === 'rock') {
      return RESULT_WIN_STR;
    } else {
      return RESULT_DRAW_STR;
    }
  } else if (playerSelction === 'scissors') {
    if (computerSelction === 'rock') {
      return RESULT_LOSE_STR;
    } else if (computerSelction === 'paper') {
      return RESULT_WIN_STR;
    } else {
      return RESULT_DRAW_STR;
    }
  } else {
    console.log("Error: Player selction was not rock, paper or scissors.");
    return 'error';
  }
}

function isValidGameChoice(choice) {
  for (const str of GAME_CHOICES) {
    if (choice === str) {
      return true;
    }
  }
  return false;
}

function getValidInputFromUser() {
  let userInput = prompt('Pick: Rock, Paper, Scissors', 'rock');
  // convert userinput to lowercase for easily comparaple string
  userInput = userInput.toLowerCase();
  while(!isValidGameChoice(userInput)) {
    alert("Incorrect input, try again");
    userInput = prompt('Pick: Rock, Paper, Scissors. Default is Rock.', 'rock');
    userInput = userInput.toLowerCase();
  }
  return userInput;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelction = getValidInputFromUser();
    let computerSelction = getComputerPlay();
    console.log(`Computer picked ${computerSelction.toUpperCase()}.`)
    let result = playRound(playerSelction, computerSelction);
    if (result === RESULT_DRAW_STR) {
      console.log(`It is a ${result.toUpperCase()}!.`);
    } else if (result === RESULT_WIN_STR) {
      console.log(`You ${result.toUpperCase()}!, ${playerSelction.toUpperCase()} beats ${computerSelction.toUpperCase()}.`);
      playerScore++;
    } else if (result === RESULT_LOSE_STR) {
      console.log(`You ${result.toUpperCase()}!, ${computerSelction.toUpperCase()} beats ${playerSelction.toUpperCase()}.`);
      computerScore++;
    } else {
      console.log('Error result was different than expected');
    }
  }
  console.log(`Computer score: ${computerScore}`);
  console.log(`Your score: ${playerScore}`);
  if (playerScore > computerScore) {
    console.log('You are the winner!!.');
  } else if (playerScore < computerScore) {
    console.log('You lost this game!!.');
  } else {
    console.log('It is a draw.')
  }
}

game();


// get player selection
//  get input from player
//  check if input is correct (matches one of the three choices)
// get computer selection
// compare player and computer selections
//  if player selects rock then:
//    if computer selects paper:
//      player loses
//    else if computer selects Scissors:
//      player wins
//    else:
//      draw
//  if player selects Paper then:
//    if computer selects Scissors:
//      player loses
//    else if computer selects Rock:
//      player wins
//    else:
//      draw
// if player selects Scissors then:
//    if computer selects Rock:
//      player loses
//    else if computer selects Paper:
//      player wins
//    else:
//      draw
// display winner
//  get winner
//  print winner to console with msg
