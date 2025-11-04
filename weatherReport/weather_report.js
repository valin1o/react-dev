function showweatherDetails(event) {
    const city = document.getElementById('city').value;
    const apiKey = '0595ba8eaba69d9c2d27d66faf9a979c'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    //
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });

    event.preventDefault();
      
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );