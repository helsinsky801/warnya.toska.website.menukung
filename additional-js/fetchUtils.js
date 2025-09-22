// Fetch utilities
async function getJSON(url) {
    const response = await fetch(url);
    return response.json();
}

async function postJSON(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}

console.log('Fetch utils loaded');
