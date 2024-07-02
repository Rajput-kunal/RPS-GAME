let playerScore = 0;
let machineScore = 0;

function store_choice(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const machineChoice = choices[Math.floor(Math.random() * 3)];

    const playerImg = document.querySelector('.player img');
    const machineImg = document.querySelector('.Machine img');

    playerImg.src = playerChoice + '_image.png';
    machineImg.src = machineChoice + '_image.png';

    determine_winner(playerChoice, machineChoice);
}

function determine_winner(playerChoice, machineChoice) {
    if (playerChoice === machineChoice) {
        // It's a tie
        return;
    }

    if (
        (playerChoice === "rock" && machineChoice === "scissors") ||
        (playerChoice === "paper" && machineChoice === "rock") ||
        (playerChoice === "scissors" && machineChoice === "paper")
    ) {
        // Player wins
        playerScore++;
        document.querySelector('.player-score').textContent = playerScore;
    } else {
        // Machine wins
        machineScore++;
        document.querySelector('.machine-score').textContent = machineScore;
    }
}

document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', function() {
        const choice = this.alt.toLowerCase();
        store_choice(choice);
    });
});
