// Display current days and time

function formatDate (timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}


// Display city datas after searching

function displayDatas (position) {
let city = document.querySelector("h1");
city.innerHTML = position.data.city;
let tempCelsius = Math.round(position.data.temperature.current);
let temperatureElement = document.querySelector("#temperature");
celciusTemperature = Math.round(position.data.temperature.current);
toFahrenheit.classList.remove("active");
toCelsius.classList.add("active");
temperatureElement.innerHTML = `${tempCelsius}`;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML=position.data.condition.description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML=`${position.data.temperature.humidity}%`;
let wind = Math.round(position.data.wind.speed);
let windElement = document.querySelector("#wind");
windElement.innerHTML=`${wind}km/h`;
let iconElement = document.querySelector("#icon");
iconElement.setAttribute ( "src", `${position.data.condition.icon_url}`);
let dayElement=document.querySelector("#date");
dayElement.innerHTML = (formatDate(position.data.time*1000));
}

//Calls the API url to get weather data based on city name searched
function search (city){
let apiKey = "e69t289845146b794bf2d43o9ea60040";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayDatas);
}

function submitSearchButton (event){
event.preventDefault();
let cityInputElement = document.querySelector ("#search-city-input");
search(cityInputElement.value);
}

let form =document.querySelector("#search-form");
form.addEventListener ("submit", submitSearchButton);



// units


//Converts temp to Fahrenheit when "F" is clicked
function displayFahrenheit (event) {
    event.preventDefault();
    toCelsius.classList.remove("active");
    toFahrenheit.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celciusTemperature * 9)/5 + 32;
    temperatureElement.innerHTML=Math.round(fahrenheitTemperature);
  }

//Converts temp to Celsius when "C" is clicked  
  function displayCelsius(event) {
    event.preventDefault();
    toFahrenheit.classList.remove("active");
    toCelsius.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemperature);
  }

//Global variable for Celsius temperature value
let celciusTemperature = null;

//Converts temp to Fahrenheit when "F" is clicked
let toFahrenheit = document.querySelector("#f-link");
toFahrenheit.addEventListener("click", displayFahrenheit);

//Converts temp to Celsius when "C" is clicked
let toCelsius = document.querySelector("#c-link");
toCelsius.addEventListener("click", displayCelsius);

search("Avignon");