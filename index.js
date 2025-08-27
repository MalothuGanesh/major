async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '91fe5a43a6ca4dcfc0f59505e1a4f788';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const temp = data.main.temp;
      document.getElementById('result').innerText = `Temperature at ${city}: ${temp}°C`;
    } else {
      document.getElementById('result').innerText = `City not found. Please try again.`;
    }
  } catch (error) {
    document.getElementById('result').innerText = `Error fetching data.`;
  }
}