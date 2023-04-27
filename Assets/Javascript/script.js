
var cityNameEl = document.getElementById('cityName');
var searchTest = document.getElementById("myTestingInput");
var cityTest = searchTest.value.trim();
var savedSearches =[]

//Variable for current day:
var tempTodayEl = document.getElementById('temperatureToday');
var windpseedTodayEl = document.getElementById('windSpeedToday')
var humidityTodayEl = document.getElementById('humidityToday')
var iconTodayEl = document.getElementById('todayIcon')
var dateTodayEl = document.getElementById('todayDate')
var todaysIconlink = "`https://openweathermap.org/img/wn/${icon}.png`"


// var day2Date = document.getElementById('Day2');

var testButtton = document.getElementById("buttonTT");
testButtton.addEventListener("click",function() {
  getWeatherForecast();
  getWeather();
 
});
function getWeather (cityTest){
    var cityTest = searchTest.value.trim();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityTest+"&appid=a7eda06416e8b65bfc4e1612aa389971&units=metric",  {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.main.humidity);
        
        cityNameEl.textContent = data.name;
        windpseedTodayEl.textContent ="Windspeed: " + data.wind.speed;
        tempTodayEl.textContent = "Temperature: " + Math.round(data.main.temp)+ "°C";
        humidityTodayEl.textContent = "Humidity: " + data.main.humidity;
        var iconToday = data.weather[0].icon;
        todaysIconlink = `https://openweathermap.org/img/wn/${iconToday}.png`;
        iconTodayEl.setAttribute("src", todaysIconlink);

      });
}

function getWeatherForecast(cityTest) {
  var searchTest = document.getElementById("myTestingInput");
  var cityTest = searchTest.value.trim();

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityTest +
      "&appid=a7eda06416e8b65bfc4e1612aa389971&units=metric",
    {
      method: "GET", //GET is the default.
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    const days = [5,13,21,29,37];

    days.forEach((day, index)=>{
      dayElement = document.getElementById(`day${index + 2}`);
      const dayDate = data.list[day].dt_txt
      const daytemperature = Math.round(data.list[day].main.temp) + "°C";
      const dayHumidity = data.list[day].main.humidity;
      const dayWindspeed = data.list[day].wind.speed;
      const dayIcon = data.list[day].weather[0].icon;
      const iconLink = `https://openweathermap.org/img/wn/${dayIcon}.png`;

      dayElement.children[0].textContent = dayDate;
      dayElement.children[1].setAttribute = ('src', iconLink);
      console.log(dayElement.children[1]);
      dayElement.children[2].textContent = `Temperature: ${daytemperature}°C`;
      dayElement.children[3].textContent = `Windspeed: ${dayWindspeed}`;
      dayElement.children[4].textContent = `Humidity: ${dayHumidity}`

    })
  });
};


