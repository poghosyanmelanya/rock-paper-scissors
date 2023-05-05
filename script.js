//get user input
function getPlayerChoice(){
    let input = prompt("Pick rock, paper or scissors to play!");
    let playerChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return playerChoice;
}


//get computer input
function getComputerChoice(){
    let possibleChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    //store the computer choice into the function to be called on later
    return randomChoice;
}

//function to check round winner
function roundWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")){
            return "Player";

    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    let checkingWinner = roundWinner(playerSelection, computerSelection)
    if(checkingWinner == "Tie"){
        return "It\'s a Tie!";
    }
    else if(checkingWinner == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------");
        if(roundWinner(playerSelection, computerSelection) == "Player"){
            playerScore ++;
        }
        else if(roundWinner(playerSelection, computerSelection) == "Computer"){
            computerScore ++;
        }
    }
    if(playerScore > computerScore){
        console.log("You are the winner!");
    }
    else if(playerScore < computerScore){
        console.log("Computer is the winner!");
    }
    else{
        console.log("It\'s a tie!");
    }
    
}
game();
console.log("Game Over!");