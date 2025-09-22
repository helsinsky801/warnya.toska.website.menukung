// lebay-throttle.js - Utilitas throttle yang lebay

function lebayThrottle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Contoh penggunaan
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', lebayThrottle(function() {
        console.log('Window resized');
    }, 500));
});
