const options = ["rock", "paper", "scissors"];


function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice)
    return choice
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It is a tie";
    } else if (result == "Player") {
        return "Player 1 wins, " + playerSelection + " beats " +  computerSelection +".";
    } else {
        return "Computer wins, " + computerSelection + " beats "  + playerSelection +".";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "It is a tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player 1 wins, " + playerSelection + " beats " +  computerSelection +".";
    } else {
        return "Computer wins, " + computerSelection + " beats "  + playerSelection +".";
    }
}

*/

