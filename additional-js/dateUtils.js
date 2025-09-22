// Date utilities
function formatDate(date) {
    return date.toLocaleDateString();
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

console.log('Date utils loaded');
