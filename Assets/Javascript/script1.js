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