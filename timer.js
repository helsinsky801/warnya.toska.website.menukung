// Simple Timer
let timerId;

function startTimer(callback, interval = 1000) {
    timerId = setInterval(callback, interval);
}

function stopTimer() {
    clearInterval(timerId);
}

function countdown(seconds, callback) {
    let count = seconds;
    const timer = setInterval(() => {
        callback(count);
        count--;
        if (count < 0) clearInterval(timer);
    }, 1000);
}

console.log('Timer module loaded');
