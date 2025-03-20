document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '2b5de9b438883849eae854aa42890fb7'; // Your OpenWeatherMap API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Timbuktu&units=imperial&appid=${apiKey}`;
    const membersUrl = 'data/member.json'; // Path to the JSON file

    // Display Last Modified Date
    document.getElementById("last-modified").textContent += document.lastModified;

    // Fetch and Display Weather Data
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Display current weather
            const currentWeather = document.getElementById("current-weather");
            currentWeather.textContent = 
                `Current: ${data.list[0].weather[0].description}, ${data.list[0].main.temp}°F`;

            // Display three-day forecast
            const forecastList = document.getElementById("forecast");
            forecastList.innerHTML = `
                <li>Day 1: ${data.list[8].main.temp}°F, ${data.list[8].weather[0].description}</li>
                <li>Day 2: ${data.list[16].main.temp}°F, ${data.list[16].weather[0].description}</li>
                <li>Day 3: ${data.list[24].main.temp}°F, ${data.list[24].weather[0].description}</li>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Fetch and Display Spotlight Businesses
    fetch(membersUrl)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("spotlight-container");

            // Filter gold and silver members
            const spotlightMembers = data.filter(member => member.membershipLevel > 1);

            // Randomly select up to 3 spotlight members
            const selectedMembers = spotlightMembers.sort(() => Math.random() - 0.5).slice(0, 3);

            // Render spotlight cards
            selectedMembers.forEach(member => {
                const card = document.createElement("div");
                card.className = "spotlight-card";
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching spotlight members:', error));
});
