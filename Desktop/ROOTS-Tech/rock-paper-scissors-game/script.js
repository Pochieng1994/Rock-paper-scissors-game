/* The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
-Every time the user plays/clicks a button, display the winner
-A user can play as many times as they want 
*/

  let buttons = document.querySelectorAll('.buttons button');

  let playerScore = 0;
  let computerScore = 0;

  /* Computer Options, I would assign 3 numbers to represent the 3 different options that I have Rock,Paper,
  Scissors.*/

  let computerOptions = ['Rock', 'Paper', 'Scissors'];
  
  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      let computerNumber = Math.floor(Math.random() * 3);
      let computerChoice = computerOptions[computerNumber];
      console.log(computerChoice);
    })
  })

  let computerNumber = Math.floor(Math.random() * 3);
