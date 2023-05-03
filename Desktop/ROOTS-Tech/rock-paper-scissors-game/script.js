/* The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
-Every time the user plays/clicks a button, display the winner
-A user can play as many times as they want 
*/

playerChoiceDisplay = document.querySelector('#player-choice');
computerChoiceDisplay = document.querySelector('#computer-choice');
result = document.querySelector('#result');
buttons = document.querySelectorAll('button');
let playerChoice;
let computerChoice;



buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    playerChoice = e.target.id;
    playerChoiceDisplay.textContent = playerChoice;
    generatedComputerChoice();
    getResult();
  })
})

function generatedComputerChoice () {
  randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'paper';
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
  if(playerChoice === computerChoice) {
    result.textContent = 'Its a Tie!'
  }

  if(playerChoice === 'rock' && computerChoice === 'scissors'){
    result.textContent = 'Hooray You Won!'
  }

  if(playerChoice === 'rock' && computerChoice === 'paper'){
    result.textContent = 'You Lost'
  }

  if(playerChoice === 'scissors' && computerChoice === 'rock'){
    result.textContent = 'You Lost'
  }

  if(playerChoice === 'scissors' && computerChoice === 'paper'){
    result.textContent = 'Hooray You Won!'
  }

  if(playerChoice === 'paper' && computerChoice === 'scissors'){
    result.textContent = 'You Lost'
  }

  if(playerChoice === 'paper' && computerChoice === 'rock'){
    result.textContent = 'Hooray You Won!'
  }

}







