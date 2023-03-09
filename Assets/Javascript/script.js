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
var todaysIconlink = "`https://openweathermap.org/img/wn/${icon}.png`"

var weatherForecast = document.querySelectorAll('forecast');

var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var APIkey = "a7eda06416e8b65bfc4e1612aa389971";

var day2Date = document.getElementById('Day2');
var dataResponse;

var testButtton = document.getElementById("buttonTT");
testButtton.addEventListener("click",function() {
  getWeatherForecast();
  getWeather();
});
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
     var day2Temp = dayTwo.children[2];
      day2Temp.textContent = "Temperature: " + Math.round(data.list[0].main.temp) + "°C";
      console.log(day2Temp);

      var dayTwoHumidity = dayTwo.children[4];
      dayTwoHumidity.textContent = "Humidity: " + data.list[0].main.humidity;
      console.log(dayTwoHumidity);

      var dayTwoDate = dayTwo.children[0];
      dayTwoDate.textContent = data.list[0].dt_txt;
      console.log(dayTwoDate);

      var dayTwoWindspeed = dayTwo.children[3];
      dayTwoWindspeed.textContent ="Windspeed: " + data.list[0].wind.speed;
      console.log(dayTwoWindspeed);

      var icon = data.list[0].weather[0].icon;
      var iconLink = `https://openweathermap.org/img/wn/${icon}.png`;
      var dayTwoIcon = dayTwo.children[1];
      dayTwoIcon.setAttribute("src", iconLink);
      console.log(dayTwoIcon); 

      //

      var day3Temp = dayThree.children[2];
      day3Temp.textContent = "Temperature: " + Math.round(data.list[8].main.temp) + "°C";
      console.log(day3Temp);

      var day3Humidity = dayThree.children[4];
      day3Humidity.textContent = "Humidity: " + data.list[8].main.humidity;
      console.log(day3Humidity);

      var day3Date = dayThree.children[0];
      day3Date.textContent = data.list[8].dt_txt;
      console.log(day3Date);

      var day3Windspeed = dayThree.children[3];
      day3Windspeed.textContent ="Windspeed: " + data.list[8].wind.speed;
      console.log(day3Windspeed);

      var icon3 = data.list[8].weather[0].icon;
      var icon3Link = `https://openweathermap.org/img/wn/${icon3}.png`;
      var day3Icon = dayThree.children[1];
      day3Icon.setAttribute("src", icon3Link);
      console.log(day3Icon);

      //
      var day4Temp = dayFour.children[2];
      day4Temp.textContent = "Temperature: " + Math.round(data.list[16].main.temp) + "°C";
      console.log(day4Temp);

      var day4Humidity = dayFour.children[4];
      day4Humidity.textContent = "Humidity: " + data.list[16].main.humidity;
      console.log(day4Humidity);

      var day4Date = dayFour.children[0];
      day4Date.textContent = data.list[16].dt_txt;
      console.log(day4Date);

      var day4Windspeed = dayFour.children[3];
      day4Windspeed.textContent ="Windspeed: " + data.list[16].wind.speed;
      console.log(day4Windspeed);

      var icon4 = data.list[16].weather[0].icon;
      var icon4Link = `https://openweathermap.org/img/wn/${icon4}.png`;
      var day4Icon = dayFour.children[1];
      day4Icon.setAttribute("src", icon4Link);
      console.log(day4Icon);

      //

      var day5Temp = dayFive.children[2];
      day5Temp.textContent = "Temperature: " + Math.round(data.list[24].main.temp) + "°C";
      console.log(day5Temp);

      var day5Humidity = dayFive.children[4];
      day5Humidity.textContent = "Humidity: " + data.list[24].main.humidity;
      console.log(day5Humidity);

      var day5Date = dayFive.children[0];
      day5Date.textContent = data.list[24].dt_txt;
      console.log(day5Date);

      var day5Windspeed = dayFive.children[3];
      day5Windspeed.textContent ="Windspeed: " + data.list[24].wind.speed;
      console.log(day5Windspeed);

      var icon5 = data.list[24].weather[0].icon;
      var icon5Link = `https://openweathermap.org/img/wn/${icon5}.png`;
      var day5Icon = dayFive.children[1];
      day5Icon.setAttribute("src", icon5Link);
      console.log(day5Icon);

      //

      var day6Temp = daySix.children[2];
      day6Temp.textContent = "Temperature: " + Math.round(data.list[32].main.temp) + "°C";
      console.log(day6Temp);

      var day6Humidity = daySix.children[4];
      day6Humidity.textContent = "Humidity: " + data.list[32].main.humidity;
      console.log(day6Humidity);

      var day6Date = daySix.children[0];
      day6Date.textContent = data.list[32].dt_txt;
      console.log(day6Date);

      var day6Windspeed = daySix.children[3];
      day6Windspeed.textContent ="Windspeed: " + data.list[32].wind.speed;
      console.log(day6Windspeed);

      var icon6 = data.list[32].weather[0].icon;
      var icon6Link = `https://openweathermap.org/img/wn/${icon6}.png`;
      var day6Icon = daySix.children[1];
      day6Icon.setAttribute("src", icon6Link);
      console.log(day6Icon);
      
    });
};





      //  for (var i=0; i<dataResponse.length; i+8) {
      //       var dates = data.list[i].dt_txt;
      //        var temp = data.list[i].main.temp;
      //        var humidity = data.list[i].main.humidity;
      //        var windspeed = data.lsit[i].wind.speed;
      //        var icon = data.list[i].weather[0].icon;
      
      //        console.log(dataResponse.length);
      //        for (var j=0; j<daysArrays.length;j++) {
      //           daysArrays[j].children[0].textContent = dates[i];
      //           daysArrays[j].children[1].textContent = icon[i];
      //           daysArrays[j].children[2].textContent = temp[i];
      //           daysArrays[j].children[3].textContent = windspeed[i];
      //           daysArrays[j].children[4].textContent = humidity[i];
        
                
      //          }
      
      //       }

      //   } 

        

        
        
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