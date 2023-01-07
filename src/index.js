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

const playerSection = 'rock';
const computerSelection = getComputerChoice();
console.log(`computer choses ${computerSelection}`);
console.log(playRound(playerSection, computerSelection));