//PSEUDO CODE -- User should be able to click rock, paper, or scissors and the computer's choice should be generated and a result should generate

//define the elements first
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') 
let userChoice //saves user choice
let computerChoice //saves computer choice
let result //saves the result

//add event listener for the buttons
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

//computer with have a random choice to compete against the user
function generateComputerChoice () {
    const randomNumber = (Math.random() * 3) + 1 //possibleChoices.length??? how to use this 
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
      }
      if (randomNumber === 2) {
        computerChoice = 'scissors'
      }
      if (randomNumber === 3) {
        computerChoice = 'paper'
      }
      computerChoiceDisplay.innerHTML = computerChoice
}

//this function will be for who wins or loses: user or the computer
function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lose!'
    }
    resultDisplay.innerHTML = result
  }