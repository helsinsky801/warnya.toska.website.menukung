// Validation utilities
function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isNotEmpty(str) {
    return str.trim().length > 0;
}

console.log('Validation utils loaded');
