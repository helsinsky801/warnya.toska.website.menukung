// Simple API Fetcher
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

function mockFetch() {
    return Promise.resolve({ message: 'Mock data' });
}

console.log('API fetcher module loaded');
