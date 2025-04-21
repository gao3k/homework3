// weather.js
const API_KEY = "შენი_API_KEY";

async function getWeather() {
  const city = document.getElementById("city").value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await res.json();

  const weatherDiv = document.getElementById("weather");
  if (data.main) {
    weatherDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
  } else {
    weatherDiv.innerHTML = `<p>City not found</p>`;
  }
}
