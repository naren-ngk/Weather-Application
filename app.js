const locationForm = document.getElementById('location-form');
const icon = document.getElementById('image');
const temperature = document.getElementById('temperature-degree');
const description = document.getElementById('temperature-description');
const unit = document.getElementById('unit');
let celcius, farenheit;

window.addEventListener('load', async () => {
    const location = locationForm.elements.query.value;
    const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=7eb9e6b14d1249e5b98101637231803&q=${location}`);
    displayData(weatherData.data.current, location);
});

locationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = locationForm.elements.query.value;
    const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=7eb9e6b14d1249e5b98101637231803&q=${location}`);
    displayData(weatherData.data.current, location);
});

const displayData = (weatherData, location) => {
    const path = weatherData.condition.icon.slice(21);
    icon.setAttribute('src', path);
    temperature.textContent = weatherData.temp_f;
    description.textContent = `The weather condition in ${location} is ${weatherData.condition.text}.`;
    farenheit = weatherData.temp_f;
    celcius = weatherData.temp_c;
}

temperature.addEventListener('click', () => {
    if (unit.textContent == 'F') {
        temperature.textContent = celcius;
        unit.innerHTML = 'C';
    }
    else {
        temperature.textContent = farenheit;
        unit.innerHTML = 'F';
    }
});

