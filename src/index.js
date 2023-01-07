import _ from 'lodash';
import './style.css';

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSection, computerSelection) {
  if(playerSection.toLowerCase() === 'rock' && computerSelection == 'paper'){
    return "You Lose! Paper beats Rock";
  }
  else if(playerSection.toLowerCase() === 'scissors' && computerSelection == 'rock'){
    return "You Lose! Rock beats Scissors";
  }
  else if(playerSection.toLowerCase() === 'paper' && computerSelection == 'scissors'){
    return "You Lose! Scissors beats Paper";
  }
  else if(playerSection.toLowerCase() === 'paper' && computerSelection == 'rock'){
    return "You Win! Paper beats Rock";
  }
  else if(playerSection.toLowerCase() === 'rock' && computerSelection == 'scissors'){
    return "You Win! Rock beats Scissors";
  }
  else if(playerSection.toLowerCase() === 'scissors' && computerSelection == 'paper'){
    return "You Win! Scissors beats Paper";
  }
  else if(playerSection.toLowerCase() === computerSelection){
    return "This was a draw! Your selection is the same with computer's"
  }
}

// const playerSection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(`computer choses ${computerSelection}`);
// console.log(playRound(playerSection, computerSelection));

function game() {
  let playerWins = 0;
  let computerWins = 0;
  while(computerWins<5 && playerWins<5){
    const playerSection = prompt("Enter your choice");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSection, computerSelection);
    console.log(result);
    switch(result) {
      case("You Lose! Paper beats Rock"):
      case("You Lose! Rock beats Scissors"):
      case("You Lose! Scissors beats Paper"):
        computerWins++;
        break;
      case("You Win! Paper beats Rock"):
      case("You Win! Rock beats Scissors"):
      case("You Win! Scissors beats Paper"):
        playerWins++;
        break;
    }
    console.log(`score is ${playerWins} - ${computerWins}`);
    
    if(playerWins === 5){
      console.log("YOU HAVE WON THE COMPUTER");
    }
    if(computerWins === 5){
      console.log("THE COMPUTER HAS WON YOU");
    }
  }

  
}

game();