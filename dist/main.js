/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import _ from 'lodash';\r\n// import './style.css';\r\n\r\nconst options = ['rock', 'paper', 'scissors'];\r\n\r\nfunction getComputerChoice() {\r\n  const random = Math.floor(Math.random() * options.length);\r\n  return options[random];\r\n}\r\n\r\nfunction playRound(playerSection, computerSelection) {\r\n  if (playerSection.toLowerCase() === 'rock' && computerSelection == 'paper') {\r\n    return \"You Lose! Paper beats Rock\";\r\n  }\r\n  else if (playerSection.toLowerCase() === 'scissors' && computerSelection == 'rock') {\r\n    return \"You Lose! Rock beats Scissors\";\r\n  }\r\n  else if (playerSection.toLowerCase() === 'paper' && computerSelection == 'scissors') {\r\n    return \"You Lose! Scissors beats Paper\";\r\n  }\r\n  else if (playerSection.toLowerCase() === 'paper' && computerSelection == 'rock') {\r\n    return \"You Win! Paper beats Rock\";\r\n  }\r\n  else if (playerSection.toLowerCase() === 'rock' && computerSelection == 'scissors') {\r\n    return \"You Win! Rock beats Scissors\";\r\n  }\r\n  else if (playerSection.toLowerCase() === 'scissors' && computerSelection == 'paper') {\r\n    return \"You Win! Scissors beats Paper\";\r\n  }\r\n  else if (playerSection.toLowerCase() === computerSelection) {\r\n    return \"This was a draw! Your selection is the same with computer's\"\r\n  }\r\n}\r\n\r\nfunction game() {\r\n  let playerWins = 0;\r\n  let computerWins = 0;\r\n  while (computerWins < 5 && playerWins < 5) {\r\n    const playerSection = prompt(\"Enter your choice\");\r\n    const computerSelection = getComputerChoice();\r\n    const result = playRound(playerSection, computerSelection);\r\n    console.log(result);\r\n    switch (result) {\r\n      case (\"You Lose! Paper beats Rock\"):\r\n      case (\"You Lose! Rock beats Scissors\"):\r\n      case (\"You Lose! Scissors beats Paper\"):\r\n        computerWins++;\r\n        break;\r\n      case (\"You Win! Paper beats Rock\"):\r\n      case (\"You Win! Rock beats Scissors\"):\r\n      case (\"You Win! Scissors beats Paper\"):\r\n        playerWins++;\r\n        break;\r\n    }\r\n    console.log(`score is ${playerWins} - ${computerWins}`);\r\n\r\n    if (playerWins === 5) {\r\n      console.log(\"YOU HAVE WON THE COMPUTER\");\r\n    }\r\n    if (computerWins === 5) {\r\n      console.log(\"THE COMPUTER HAS WON YOU\");\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;