// Simple Console Chart
function drawBarChart(data) {
    data.forEach(item => {
        console.log(`${item.label}: ${'*'.repeat(item.value)}`);
    });
}

// Example usage
// drawBarChart([{label: 'A', value: 5}, {label: 'B', value: 3}]);

console.log('Chart module loaded');
