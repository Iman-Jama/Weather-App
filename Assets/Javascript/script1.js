//dateTodayEl.innerHTML = dayjs().format('MMMM D, YYYY h:mm A');

//const weather = {
    //  var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    //  var APIkey = "a7eda06416e8b65bfc4e1612aa389971"; 
    //  var city = searchedCity.value.trim();
    //  var finalRequestUrl = requestUrl + "London" + "&appid=" + APIkey;
    
    
//searchBtn.addEventListener("click", getWeather)
//  {
//     //event.preventDefault();
//     var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
//     var APIkey = "a7eda06416e8b65bfc4e1612aa389971"; 
//     var city = searchedCity.value.trim();
//     var finalRequestUrl = requestUrl + "London" + "&appid=" + APIkey;
    
//     fetch("https:api.openweathermap.org/data/2.5/weather?q=london&appid=a7eda06416e8b65bfc4e1612aa389971",  {
//         method: 'GET', //GET is the default.
//         credentials: 'same-origin', // include, *same-origin, omit
//         redirect: 'follow', // manual, *follow, error
//       })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       });
//         // .then(function (response) {
//         //     if (response.ok) {
//         //         console.log(response);
//         //         response.json().then(function (data) {
//         //             console.log(data);
//         //         });
//         //     } else {
//         //         alert('Error: ' + response.statusText);
//         //     }
//         // })
//         // .catch(function (error) {
//         //     alert('Unable to connect to Open Weather API');
       
//         // });

// });


for (var i = 0; i < dataResponse.length; i += 8) {
    var dates = dataResponse.list[i].dt_txt;
    var temp = dataResponse.list[i].main.temp;
    var humidity = dataResponse.list[i].main.humidity;
    var windspeed = dataResponse.list[i].wind.speed;
    var icon = dataResponse.list[i].weather[0].icon;

    console.log(dataResponse.list.length);
    for (var j = 0; j < daysArrays.length; j++) {
      daysArrays[j].children[0].textContent = dates[i + j * 8];
      daysArrays[j].children[1].textContent = icon;
      daysArrays[j].children[2].textContent = temp;
      daysArrays[j].children[3].textContent = windspeed;
      daysArrays[j].children[4].textContent = humidity;
    }
  }
}


 //getWeather();
//  testButtton.addEventListener("click",getWeatherForecast);
//  function getWeatherForecast (cityTest) {
//     // var city = searchedCity.value.trim();
//     // console.log(city);
//     var searchTest = document.getElementById("myTestingInput");
    
//     var cityTest = searchTest.value.trim();

//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityTest + "&appid=a7eda06416e8b65bfc4e1612aa389971&units=metric",  {
//         method: 'GET', //GET is the default.
//         credentials: 'same-origin', // include, *same-origin, omit
//         redirect: 'follow', // manual, *follow, error
//       })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//         //console.log(data.name);
//         //console.log(data.main.humidity);

//          dataResponse = data;
//       });

//       var day2Temp = dayTwo.children[2]
//       day2Temp.textContent = dataResponse.list[0].main.temp;
//       var dayTwoHumidity = dayTwo.children[4];
//       dayTwoHumidity.textContent = dataResponse.list[0].main.humidity;
//       var dayTwoDate = dayTwo.children[0];
//       dayTwoDate.textContent = dataResponse.list[0].dt_txt;
//       var dayTwoWindspeed = dayTwo.children[3];
//       dayTwoWindspeed.textContent = dataResponse.list[0].wind.speed;
//       var icon = data.list[i].weather[0].icon;
//       var iconLink = `https://openweathermap.org/img/wn/${icon}.png`;
//       var dayTwoIcon = dayTwo.children[1];
//       dayTwoIcon.setAttribute("src", iconLink);

//     };


