// Timer utilities
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startTimer(callback, interval) {
    return setInterval(callback, interval);
}

console.log('Timer utils loaded');
