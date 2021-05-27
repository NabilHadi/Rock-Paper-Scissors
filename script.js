const choices = ['rock', 'paper', 'scissors'];
const result_win = 'win';
const result_lose = 'lose';
const result_draw = 'draw';

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelction, computerSelction) {
  if (playerSelction === 'rock') {
    if (computerSelction === 'paper') {
      return result_lose;
    } else if (computerSelction === 'scissors') {
      return result_win;
    } else {
      return result_draw;
    }
  } else if (playerSelction === 'paper') {
    if (computerSelction === 'scissors') {
      return result_lose;
    } else if (computerSelction === 'rock') {
      return result_win;
    } else {
      return result_draw;
    }
  } else if (playerSelction === 'scissors') {
    if (computerSelction === 'rock') {
      return result_lose;
    } else if (computerSelction === 'paper') {
      return result_win;
    } else {
      return result_draw;
    }
  } else {
    console.log("Error: Player selction was not rock, paper or scissors.");
    return 'error';
  }
}

function isCorrectChoice(choice) {
  for (const str of choices) {
    if (choice === str) {
      return true;
    }
  }
  return false;
}

function getCorrectInput() {
  let input = prompt('Pick: Rock, Paper, Scissors', 'rock').toLowerCase();
  while(!isCorrectChoice(input)) {
    alert("Incorrect input, try again");
    input = prompt('Pick: Rock, Paper, Scissors. Default is Rock.', 'rock').toLowerCase();
  }
  return input;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelction = getCorrectInput();
    let computerSelction = computerPlay();
    console.log(`Computer picked ${computerSelction.toUpperCase()}.`)
    let result = playRound(playerSelction, computerSelction);
    if (result === result_draw) {
      console.log(`It is a ${result.toUpperCase()}!.`);
    } else if (result === result_win) {
      console.log(`You ${result.toUpperCase()}!, ${playerSelction.toUpperCase()} beats ${computerSelction.toUpperCase()}.`);
      playerScore++;
    } else if (result === result_lose) {
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
