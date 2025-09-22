// Number utilities
function isEven(num) {
    return num % 2 === 0;
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

console.log('Number utils loaded');
