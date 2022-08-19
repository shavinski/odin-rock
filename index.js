const options = ["rock", "paper", "scissors"];


function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chooses" +" " + choice);
    return choice;
}

function getPlayerChoice (){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Please type rock paper or scissors");
        if (choice == null){
            continue;
        } 
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

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

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    console.log("________");
    for (let i=0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("__________");
        if(playRound(playerSelection, computerSelection) == "Player 1 wins, " + playerSelection + " beats " +  computerSelection +"." ) {
            scorePlayer++;
        } else if (playRound(playerSelection, computerSelection) == "Computer wins, " + computerSelection + " beats "  + playerSelection +".") {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer){
        console.log("Player 1 was the winner");
    } else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner");
    } else {
        console.log ("We have a tie");
    }
}

game()