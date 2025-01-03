function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "9435699d6f2a3f2cd6b3e67t0o99669e";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  searchCity(searchInput.value);
}

let searchBarElement = document.querySelector("#search-bar");
searchBarElement.addEventListener("submit", handleSearchSubmit);
