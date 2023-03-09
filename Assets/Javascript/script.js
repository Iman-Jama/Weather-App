var time = document.getElementById('todayTime');
var searchBtn = document.getElementById('searchBtn');
//console.log(searchBtn);
var searchedCity = document.getElementById('query');

var previousSearches = document.getElementById('previous-search');
var currentWeather = document.getElementById('today');
var dayTwo = document.getElementById('day2');
var dayThree = document.getElementById('day3');
var dayFour = document.getElementById('day4');
var dayFive = document.getElementById('day5');
var daySix = document.getElementById('day6');

var daysArrays = [dayTwo, dayThree, dayFour, dayFive, daySix];

var cityNameEl = document.getElementById('cityName');
var searchTest = document.getElementById("myTestingInput");

//Variable for current day:
var tempTodayEl = document.getElementById('temperatureToday');
var windpseedTodayEl = document.getElementById('windSpeedToday')
var humidityTodayEl = document.getElementById('humidityToday')
var iconTodayEl = document.getElementById('todayIcon')
var dateTodayEl = document.getElementById('todayDate')

var weatherForecast = document.querySelectorAll('forecast');

var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var APIkey = "a7eda06416e8b65bfc4e1612aa389971";

var day2Date = document.getElementById('Day2');
var dataResponse;

var testButtton = document.getElementById("buttonTT");
testButtton.addEventListener("click",getWeather);
function getWeather (cityTest){
    // var city = searchedCity.value.trim();
    // console.log(city);
    var searchTest = document.getElementById("myTestingInput");
    
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
        iconTodayEl.textContent = data.weather[0].icon;
      });
}
 //getWeather();
 testButtton.addEventListener("click",getWeatherForecast);
 function getWeatherForecast (cityTest) {
    // var city = searchedCity.value.trim();
    // console.log(city);
    var searchTest = document.getElementById("myTestingInput");
    
    var cityTest = searchTest.value.trim();

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityTest + "&appid=a7eda06416e8b65bfc4e1612aa389971&units=metric",  {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //console.log(data.name);
        //console.log(data.main.humidity);

         dataResponse = data;
      });

       for (var i=0; i<dataResponse.length; i+8) {
            var dates = data.list[i].dt_txt;
             var temp = data.list[i].main.temp;
             var humidity = data.list[i].main.humidity;
             var windspeed = data.lsit[i].wind.speed;
             var icon = data.list[i].weather[0].icon;
      
             console.log(dataResponse.length);
             for (var j=0; j<daysArrays.length;j++) {
                daysArrays[j].children[0].textContent = dates[i];
                daysArrays[j].children[1].textContent = icon[i];
                daysArrays[j].children[2].textContent = temp[i];
                daysArrays[j].children[3].textContent = windspeed[i];
                daysArrays[j].children[4].textContent = humidity[i];
        
                
               }
      
            }

        } 

        

        
        
    //     // cityNameEl.textContent = data.name;
    //     // windpseedTodayEl.textContent ="Windspeed: " + data.wind.speed;
    //     // tempTodayEl.textContent = "Temperature: " + Math.round(data.main.temp)+ "°C";
    //     // humidityTodayEl.textContent = "Humidity: " + data.main.humidity;
    //     // iconTodayEl.textContent = data.weather[0].icon;
    //   );
//}

 function savingInfo() {
    //event.preventDefault();
    
    // for (var i = 0; i < saveButton.length; i++) {
    //    var button = saveButton[i];
       
        button.addEventListener("click", function(event) {
        event.preventDefault();
       
        var previousSearchedItem = searchTest.value.trim();
        // var eventTextInfo = this.previousElementSibling.value;
  
        // console.log(eventTextInfo);
        // console.log(id);
        
        localStorage.setItem(previousSearchedItem, getWeather(cityTest));
      });
    }
  
  


//  function getSavedInfo() {
//     
//       var savedTextInfo = localStorage.getItem(id);
//       if (savedTextInfo) {
//         eventText[i].value = savedTextInfo;
//       }
//     }
//   }
  
  
//   getSavedInfo();

// function finalWeather (data) {
//     for (var i=0; i<data.length; i++) {

//     }

// }

// fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=a7eda06416e8b65bfc4e1612aa389971', {
//   method: 'GET', //GET is the default.
//   credentials: 'same-origin', // include, *same-origin, omit
//   redirect: 'follow', // manual, *follow, error
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });