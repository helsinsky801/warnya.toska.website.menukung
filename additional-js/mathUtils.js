// Math utilities
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

console.log('Math utils loaded');
