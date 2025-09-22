// Array utilities
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function uniqueArray(arr) {
    return [...new Set(arr)];
}

console.log('Array utils loaded');
