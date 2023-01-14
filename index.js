const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;

const playerScoreTrack = document.querySelector('.player-track')
const cpuScoreTrack = document.querySelector('.computer-track')
const results = document.querySelector('#results')
const playerButtons = document.querySelector('#player-buttons')
const resetButton = document.querySelector('#reset-btn')

playerScoreTrack.textContent = playerScore;
cpuScoreTrack.textContent = cpuScore;

// RESETS GAME WITH CLICK OF BUTTON
resetButton.addEventListener('click', () => location.reload());

// RANDOMLY GENERATES COMPUTER CHOICE FROM AN ARRAY OF OPTIONS AND THEN CHANGES THE IMAGE OF WHAT IS CHOSEN
function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    
    if(choice === 'rock') {
        const cpuRock = document.getElementById('computer-mystery');
        let image = cpuRock;
        cpuRock.src = 'images/rock-emoji.png';
        console.log('cpu chooses ROCK');
        return 'rock';
    } else if (choice === 'paper') {
        const cpuPaper = document.getElementById('computer-mystery');
        let image = cpuPaper;
        cpuPaper.src = 'images/paper.png';
        console.log('cpu chooses PAPER');

        return 'paper';
    } else {
        const cpuScissors = document.getElementById('computer-mystery');
        let image = cpuScissors;
        cpuScissors.src = 'images/scissor.png';
        console.log('cpu chooses SCISSORS');
        return 'scissors';
    };
    
};

// UPDATED METHOD OF PLAYER BUTTONS AND CHOICE, CLICKING ONE OF THE THREE BUTTONS WILL CHANGE IMAGE AND ASIGN PLAYER CHOICE
playerButtons.addEventListener('click', getPlayerChoice);
    // console.log(e);
function getPlayerChoice(e) {
    let choice = e.target;
    console.log(e);
    let image = document.getElementById('player-mystery');
    let playerChooses;

    if (choice.id == 'rock') {
        image.src = 'images/rock-emoji.png';
        playerChooses = 'rock';

    } else if (choice.id == 'paper') {
        image.src = 'images/paper.png';
        playerChooses = 'paper';

    } else if (choice.id == 'scissor') {
        image.src = 'images/scissor.png';
        playerChooses = 'scissors';
    };

    playRound(playerChooses, getComputerChoice());

};

// USED AS A CALLABCK FUNCTION IN GET PLAYER CHOICE, EACH CLICK A ROUND IS ACTIVATED WITH THE CHOICE OF THE PLAYER SET AS AN ARGUMENT AND THE COMPUTER CHOICE AS AN ARGUMENT 
function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection) {
        results.textContent = 'It\'s a tie'

    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        
        results.textContent = 'Player wins the round!'
        playerScore++;
        playerScoreTrack.textContent = playerScore;

        if(playerScore === 5) {
            results.textContent = 'CONGRATS YOU WON!!!'
            results.setAttribute('style', 'color: rgb(56, 240, 56); font-weight: 1500;')

            playerButtons.removeEventListener('click', getPlayerChoice)
        }

    } else {
        results.textContent = 'CPU wins the round!'
        cpuScore++
        cpuScoreTrack.textContent = cpuScore;

        if (cpuScore === 5) {
            results.textContent = 'SORRY YOU LOST!'
            results.setAttribute('style', 'color:rgb(255, 0, 0); font-weight: 1500;')

            playerButtons.removeEventListener('click', getPlayerChoice)
        };
    };
};

// ORIGINAL CODE I HAD, CHANGED DUE TO RESET BUTTON NOT WORKING WITH THIS METHOD
// playerButtons.addEventListener('click', function getPlayerChoice(e) {
//     // console.log(e);
//     let choice = e.target;
//     let image = document.getElementById('player-mystery');
//     let playerChooses;

//     if (choice.id == 'rock') {
//         image.src = 'images/rock-emoji.png';
//         playerChooses = 'rock';

//     } else if (choice.id == 'paper') {
//         image.src = 'images/paper.png';
//         playerChooses = 'paper';

//     } else if (choice.id == 'scissor') {
//         image.src = 'images/scissor.png';
//         playerChooses = 'scissors';
//     };

//     playRound(playerChooses, getComputerChoice());

// });
