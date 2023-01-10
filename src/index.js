// import _ from 'lodash';
// import './style.css';

const { result } = require("lodash");

// const { cli } = require("webpack-dev-server");

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSection, computerSelection) {
  if (playerSection.toLowerCase() === 'rock' && computerSelection == 'paper') {
    return "You Lose! Paper beats Rock";
  }
  else if (playerSection.toLowerCase() === 'scissors' && computerSelection == 'rock') {
    return "You Lose! Rock beats Scissors";
  }
  else if (playerSection.toLowerCase() === 'paper' && computerSelection == 'scissors') {
    return "You Lose! Scissors beats Paper";
  }
  else if (playerSection.toLowerCase() === 'paper' && computerSelection == 'rock') {
    return "You Win! Paper beats Rock";
  }
  else if (playerSection.toLowerCase() === 'rock' && computerSelection == 'scissors') {
    return "You Win! Rock beats Scissors";
  }
  else if (playerSection.toLowerCase() === 'scissors' && computerSelection == 'paper') {
    return "You Win! Scissors beats Paper";
  }
  else if (playerSection.toLowerCase() === computerSelection) {
    return "This was a draw! Your selection is the same with computer's"
  }
}

// function game() {
//   let playerWins = 0;
//   let computerWins = 0;
//   while (computerWins < 5 && playerWins < 5) {
//     const playerSection = prompt("Enter your choice");
//     const computerSelection = getComputerChoice();
//     const result = playRound(playerSection, computerSelection);
//     console.log(dispResult);
//     switch (result) {
//       case ("You Lose! Paper beats Rock"):
//       case ("You Lose! Rock beats Scissors"):
//       case ("You Lose! Scissors beats Paper"):
//         computerWins++;
//         break;
//       case ("You Win! Paper beats Rock"):
//       case ("You Win! Rock beats Scissors"):
//       case ("You Win! Scissors beats Paper"):
//         playerWins++;
//         break;
//     }
//     console.log(`score is ${playerWins} - ${computerWins}`);

//     if (playerWins === 5) {
//       console.log("YOU HAVE WON THE COMPUTER");
//     }
//     if (computerWins === 5) {
//       console.log("THE COMPUTER HAS WON YOU");
//     }
//   }


// }

// game();


// Create three buttons, one for each selection. Add an event listener to the buttons
const container = document.querySelector('#container');
const btn1 = document.createElement('button');
btn1.innerText = 'Rock';
const btn2 = document.createElement('button');
btn2.innerText = 'Paper';
const btn3 = document.createElement('button');
btn3.innerText = 'Scissors';
container.append(btn1, btn2, btn3);


let playerWins = 0;
let computerWins = 0;

btn1.addEventListener('click', () => {
  const result = playRound('rock', getComputerChoice());
  resultCont.innerHTML = game(result);
});

btn2.addEventListener('click', () => {
  const result = playRound('paper', getComputerChoice());
  resultCont.innerHTML = game(result);
});

btn3.addEventListener('click', () => {
  const result = playRound('scissors', getComputerChoice());
  resultCont.innerHTML = game(result);
});

// Add a div for displaying results and change all of your console.logs into DOM methods.
const resultCont = document.querySelector('#resultCont');
resultCont.innerHTML = '<p>Game has not started</p><p>Click on a button to start a game against the computer</p>'

// Display the running score, and announce a winner of the game once one player reaches 5 points.
const scores = document.createElement('p');

function game(result) {
  switch (result) {
    case ("You Lose! Paper beats Rock"):
    case ("You Lose! Rock beats Scissors"):
    case ("You Lose! Scissors beats Paper"):
      computerWins++;
      break;
    case ("You Win! Paper beats Rock"):
    case ("You Win! Rock beats Scissors"):
    case ("You Win! Scissors beats Paper"):
      playerWins++;
      break;
  }
  if (playerWins === 5) {
    playerWins = 0;
    computerWins = 0;
    return `<p class="result-head">YOU HAVE WON THE COMPUTER!</p>
    <p class="">Start a new game?</p>`;  
  }
  if (computerWins === 5) {
    playerWins = 0;
    computerWins = 0;
    return `<p class="result-head">THE COMPUTER HAS WON YOU!</p>
    <p class="">Start a new game?</p>`;  
  }
  
  return `<p class="result-head">${result}</p>
  <p class="score">Score is ${playerWins} - ${computerWins}</p>`;  
}
