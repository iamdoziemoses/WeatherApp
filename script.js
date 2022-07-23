// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const weatherPromise = fetch(
    `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  );
  return weatherPromise.then((response) => {
    return response.json();
  });
};

searchCity = () => {
  const cityInput = document.getElementById("city-input");
  const searchValue = cityInput.value;
  
  getWeatherData(searchValue)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((err) => {
      console.log(err);
      alert("Something happened");
    });
};

showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add("visible");
};
