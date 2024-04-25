document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    
    function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const location = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                document.getElementById('location').textContent = `Location: ${location}`;
                document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('description').textContent = `Description: ${description}`;
            })
            .catch(error => console.log('Error fetching weather data:', error));
    }

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        const searchInput = document.getElementById('searchInput').value;
        if (searchInput.trim() !== '') {
            fetchWeatherData(searchInput);
        }
    });

    // Fetch initial weather data for default location (London)
    fetchWeatherData('London');
});
