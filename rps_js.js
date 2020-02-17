let playerSelection;
let playerScore = 0;

let computerSelection;
let computerScore = 0;

//references to existing div in the HTML
//important to use querySelector instead of getElementById
const playerScoreBoard = document.querySelector('#userScoreDisplay');
const computerScoreBoard = document.querySelector('#computerScoreDisplay');
const lastRound = document.querySelector("#lastRound");
const winner = document.querySelector('#winner');

//creating the elemente that will be appended
let playerScoreHere = document.createElement('p');
let computerScoreHere = document.createElement('p');

let lastPlayerChoice = document.createElement('p');
let lastComputerChoice = document.createElement('p');

let displayWinner = document.createElement('p');

//adding event listeners to each button
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', (e) => {
   playRound("rock", computerPlay()); 
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', (e) => {
   playRound("paper", computerPlay()); 
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', (e) => {
   playRound("scissors", computerPlay()); 
});
    


/*+
* Randomly selects a number between 0 and 2, then assigns the corresponding selection
* returns computerSelection
*/
function computerPlay() {

    switch(Math.floor(Math.random() * 3)) {
      case 0:
        computerSelection = "rock";
        break;
      case 1:
        computerSelection = "paper";
        break;
      case 2: 
        computerSelection = "scissors";
        break;             
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {


    if(playerSelection == computerSelection) {
               
        lastPlayerChoice.textContent = "Player Chose: " + playerSelection + " ";
        lastRound.append(lastPlayerChoice);
        
        lastComputerChoice.textContent = "Computer Chose: " + computerSelection;
        lastRound.append(lastComputerChoice);
        
        playerScoreHere.textContent = "Player Score: " + playerScore;
        playerScoreBoard.appendChild(playerScoreHere);
        
        computerScoreHere.textContent = "Computer Score: " + computerScore;
        computerScoreBoard.appendChild(computerScoreHere);
        
        checkForWinner(playerScore, computerScore);
        
    } else

    if(playerSelection == "rock" && computerSelection == "scissors"){
        
        playerScore++;
        
        lastPlayerChoice.textContent = "Player Chose: " + playerSelection + " ";
        lastRound.append(lastPlayerChoice);
        
        lastComputerChoice.textContent = "Computer Chose: " + computerSelection;
        lastRound.append(lastComputerChoice);
        
        playerScoreHere.textContent = "Player Score: " + playerScore;
        playerScoreBoard.appendChild(playerScoreHere);
        
        computerScoreHere.textContent = "Computer Score: " + computerScore;
        computerScoreBoard.appendChild(computerScoreHere);
        
        checkForWinner(playerScore, computerScore);
    
    } else

    if(playerSelection == "paper" && computerSelection == "rock") {
        
        playerScore++;
        
        lastPlayerChoice.textContent = "Player Chose: " + playerSelection + " ";
        lastRound.append(lastPlayerChoice);
        
        lastComputerChoice.textContent = "Computer Chose: " + computerSelection;
        lastRound.append(lastComputerChoice);
        
        playerScoreHere.textContent = "Player Score: " + playerScore;
        playerScoreBoard.appendChild(playerScoreHere);
        
        computerScoreHere.textContent = "Computer Score: " + computerScore;
        computerScoreBoard.appendChild(computerScoreHere);
        
        checkForWinner(playerScore, computerScore);
        
    } else

    if(playerSelection == "scissors" && computerSelection == "paper"){
        
        playerScore++;
        
        lastPlayerChoice.textContent = "Player Chose: " + playerSelection + " ";
        lastRound.append(lastPlayerChoice);
        
        lastComputerChoice.textContent = "Computer Chose: " + computerSelection;
        lastRound.append(lastComputerChoice);
        
        playerScoreHere.textContent = "Player Score: " + playerScore;
        playerScoreBoard.appendChild(playerScoreHere);
        
        computerScoreHere.textContent = "Computer Score: " + computerScore;
        computerScoreBoard.appendChild(computerScoreHere);
        
        checkForWinner(playerScore, computerScore);
   
    } else {
        
        computerScore++;
        
        lastPlayerChoice.textContent = "Player Chose: " + playerSelection + " ";
        lastRound.append(lastPlayerChoice);
        
        lastComputerChoice.textContent = "Computer Chose: " + computerSelection;
        lastRound.append(lastComputerChoice);
        
        playerScoreHere.textContent = "Player Score: " + playerScore;
        playerScoreBoard.appendChild(playerScoreHere);
        
        computerScoreHere.textContent = "Computer Score: " + computerScore;
        computerScoreBoard.appendChild(computerScoreHere);
        
        checkForWinner(playerScore, computerScore);
    }

    return;
}

function checkForWinner(playerScore, computerScore) {
    if(playerScore == 5) {
        displayWinner.textContent = "You won!";
        winner.appendChild(displayWinner);
    } else if (computerScore == 5) {
        displayWinner.textContent = "The computer won!";
        winner.appendChild(displayWinner);
    } else return;
}
