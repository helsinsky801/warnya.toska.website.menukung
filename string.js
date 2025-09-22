// String Utilities
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const reversed = reverse(str);
    return str === reversed;
}

console.log('String utilities module loaded');
