const options = ["rock", "paper", "scissors"];


function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    
    if(choice === 'rock') {
        const cpuRock = document.getElementById('computer-mystery');
        let image = cpuRock
        cpuRock.src = 'images/rock-emoji.png'
    } else if (choice === 'paper') {
        const cpuPaper = document.getElementById('computer-mystery');
        let image = cpuPaper
        cpuPaper.src = 'images/paper.png'
    } else {
        const cpuScissors = document.getElementById('computer-mystery');
        let image = cpuScissors
        cpuScissors.src = 'images/scissor.png'
    };
    
    return choice;
}

function getPlayerChoice (){
    let choice = document.qu
};

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
    };
};


const playerRock = document.querySelector('.rock-option')
playerRock.addEventListener('click', () => {
    let image = document.getElementById('player-mystery');
    let getPlayerChoice = 'rock';
    
    image.src = 'images/rock-emoji.png'

    getComputerChoice()
    console.log('player:', getPlayerChoice, 'cpu:', getComputerChoice());
    return getPlayerChoice
});

const playerPaper = document.querySelector('.paper-option')
playerPaper.addEventListener('click', () => {
    let image = document.getElementById('player-mystery');
    let getPlayerChoice = 'paper';
    
    image.src = 'images/paper.png'

    getComputerChoice()
    console.log('player:', getPlayerChoice, 'cpu:', getComputerChoice());
    return getPlayerChoice
});

const playerScissors = document.querySelector('.scissor-option')
playerScissors.addEventListener('click', () => {
    let image = document.getElementById('player-mystery');
    let getPlayerChoice = 'scissors';
    
    image.src = 'images/scissor.png'

    getComputerChoice()
    console.log('player:', getPlayerChoice, 'cpu:', getComputerChoice());
    return getPlayerChoice
});

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i=0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("__________");

        if  (playRound(playerSelection, computerSelection) == "Player 1 wins, " + playerSelection + " beats " +  computerSelection +"." ) {
            scorePlayer++;
        } else if (playRound(playerSelection, computerSelection) == "Computer wins, " + computerSelection + " beats "  + playerSelection +".") {
            scoreComputer++;
        };
    }

    console.log("Game Over");

    if(scorePlayer > scoreComputer){
        console.log("Player 1 was the winner");
    } else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner");
    } else {
        console.log ("We have a tie");
    };
};

// game()