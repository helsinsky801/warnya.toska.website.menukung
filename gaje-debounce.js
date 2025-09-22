// gaje-debounce.js - Utilitas debounce yang gaje

function gajeDebounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Contoh penggunaan
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('gaje-input');
    if (!input) return;

    input.addEventListener('input', gajeDebounce(function(e) {
        console.log('Input value:', e.target.value);
    }, 300));
});
