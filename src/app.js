// Search form



function displayDatas (position) {
console.log(position.data.temperature.current)
let temp = Math.round(position.data.temperature.current);
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = temp;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML=position.data.condition.description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML=`${position.data.temperature.humidity}%`;
let wind = Math.round(position.data.wind.speed);
let windElement = document.querySelector("#wind");
windElement.innerHTML=`${wind}km/h`;
}

function searchCityData (city){
let apiKey = "e69t289845146b794bf2d43o9ea60040";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayDatas);
}

function submitSearchButton (event){
event.preventDefault();
let city = document.querySelector("h1");
let cityInput = document.querySelector ("#search-city-input");
city.innerHTML = cityInput.value;
searchCityData(cityInput.value);
}

let form =document.querySelector("#search-form");
form.addEventListener ("click", submitSearchButton);