// ngentot-countdown.js - Timer hitung mundur yang ngentot

document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('ngentot-countdown');
    if (!countdownElement) return;

    // Set target date 1 hour from now
    const targetDate = new Date(Date.now() + 3600 * 1000);

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownElement.textContent = 'Waktu habis!';
            clearInterval(interval);
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}j ${minutes}m ${seconds}d`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});
