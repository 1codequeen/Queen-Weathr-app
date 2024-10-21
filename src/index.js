function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchBarElement = document.querySelector("#search-bar");
searchBarElement.addEventListener("submit", handleSearchSubmit);
