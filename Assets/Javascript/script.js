
var cityNameEl = document.getElementById('cityName');
var searchTest = document.getElementById("myTestingInput");
var cityTest = searchTest.value.trim();
var savedSearches = [];

//Variable for current day:
var tempTodayEl = document.getElementById('temperatureToday');
var windpseedTodayEl = document.getElementById('windSpeedToday')
var humidityTodayEl = document.getElementById('humidityToday')
var iconTodayEl = document.getElementById('todayIcon')
var dateTodayEl = document.getElementById('todayDate')
var todaysIconlink = "`https://openweathermap.org/img/wn/${icon}.png`"

var testButtton = document.getElementById("buttonTT");
  testButtton.addEventListener("click",function() {
    var cityTest = searchTest.value.trim();
    console.log(cityTest);
    getWeatherForecast(cityTest);
    getWeather(cityTest);
  
  });



function getWeather (cityTest){
   
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
       
        cityNameEl.textContent = data.name;
        windpseedTodayEl.textContent ="Windspeed: " + data.wind.speed +" mph";
        tempTodayEl.textContent = Math.round(data.main.temp)+ "°C";
        humidityTodayEl.textContent = "Humidity: " + data.main.humidity +"%";
        var iconToday = data.weather[0].icon;
        todaysIconlink = `https://openweathermap.org/img/wn/${iconToday}.png`;
        iconTodayEl.setAttribute("src", todaysIconlink);

        searchHistory(cityTest);


      });
}

function getWeatherForecast(cityTest) {
  // var searchTest = document.getElementById("myTestingInput");
  console.log(cityTest);

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
      const daytemperature = Math.round(data.list[day].main.temp);
      const dayHumidity = data.list[day].main.humidity;
      const dayWindspeed = data.list[day].wind.speed;
      const dayIcon = data.list[day].weather[0].icon;
      console.log(dayIcon);
      const iconLink = `https://openweathermap.org/img/wn/${dayIcon}.png`;

      dayElement.children[0].textContent = dayDate;
      dayElement.children[1].setAttribute('src', iconLink);
      console.log(dayElement.children[1]);
      dayElement.children[2].textContent = `${daytemperature}°C`;
      dayElement.children[3].textContent = `Windspeed: ${dayWindspeed} mph`;
      dayElement.children[4].textContent = `Humidity: ${dayHumidity}%`
    })
  });
};

function searchHistory(cityTest) {
 
	// Remove existing search history entries that contain the current city
			document.querySelectorAll('.past-search[city-name="' + cityTest + '"]').forEach(function(elem) {
			elem.remove();
			});
		

			var searchHistoryEntry = document.createElement("li");
			searchHistoryEntry.classList.add("past-search");
			searchHistoryEntry.setAttribute("city-name", cityTest);
			searchHistoryEntry.textContent = cityTest;
		
			searchHistoryEntry.addEventListener("click", function(){
      
				getWeather (cityTest)
        getWeatherForecast(cityTest)
				// searchHistory(cityTest);
			})
				
	// Container for city entry: create <div> element with a "past-search-container" class and append city name to the Container
			var searchEntryContainer = document.createElement("div");
			searchEntryContainer.classList.add("past-search-container");
			searchEntryContainer.append(searchHistoryEntry);
		
			var searchHistoryContainerEl = document.getElementById("search-bar");
			searchHistoryContainerEl.append(searchEntryContainer);
		
	if (cityTest != ""){
			savedSearches.push(cityTest);
			localStorage.setItem("savedSearches", JSON.stringify(savedSearches));
      console.log(savedSearches);
  };
	//Checks if there are any saved searches in local storage
			if (savedSearches.length > 0){
	
			var previousSavedSearches = localStorage.getItem("savedSearches");
			savedSearches = JSON.parse(previousSavedSearches);
      }
			searchTest.value = "";
		};
		
	// Load saved search history entries from local storage and display it to the search history container
		
	   function loadSearchHistory () {
			
      if (localStorage.getItem("savedSearches")) {
      savedSearches = JSON.parse(localStorage.getItem("savedSearches"));
      // Loop through the saved searches and create a search history entry for each one
      savedSearches.forEach(function(city) {
        searchHistory(city);
      });
      }

		};

