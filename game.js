// Simple Number Guessing Game
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guess(num) {
    attempts++;
    if (num < secretNumber) return 'Too low';
    if (num > secretNumber) return 'Too high';
    return `Correct! Guessed in ${attempts} attempts`;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

console.log('Game module loaded');
