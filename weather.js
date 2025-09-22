// Mock Weather Data with Random City
const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'];

function getRandomCity() {
    return cities[Math.floor(Math.random() * cities.length)];
}

const weatherData = {
    city: getRandomCity(),
    temperature: Math.floor(Math.random() * 40) + 10,
    condition: 'Sunny'
};

function getWeather() {
    return weatherData;
}

function updateWeather(temp, cond) {
    weatherData.temperature = temp;
    weatherData.condition = cond;
}

console.log('Weather module loaded');
