function searchHistory(cityTest) {
	// Remove existing search history entries that contain the current movieName
			document.querySelectorAll('.past-search[data-movie-name="' + movieName + '"]').forEach(function(elem) {
			elem.remove();
			});
		
	// Create new search history entry
			var searchHistoryEntry = document.createElement("p");
			searchHistoryEntry.classList.add("past-search");
			searchHistoryEntry.setAttribute("city-name", cityTest);
			searchHistoryEntry.textContent = cityTest;
		
			searchHistoryEntry.addEventListener("click", function(){
				searchMovie(cityTest);
				searchHistory(cityTest);
			})
				
	// Container for movie entry: create <div> element with a "past-search-container" class and append movie entry to the Container
			var searchEntryContainer = document.createElement("div");
			searchEntryContainer.classList.add("past-search-container");
			searchEntryContainer.append(searchHistoryEntry);
		
	// Append Container for movie to Search History Container Element
			var searchHistoryContainerEl = document.getElementById("aside");
			searchHistoryContainerEl.append(searchEntryContainer);
		
	// The current movieName is pushed onto the savedSearches array, and the updated array is stored in local storage
			savedSearches.push(cityTest);
			localStorage.setItem("savedSearches", JSON.stringify(savedSearches));
		
	//Checks if there are any saved searches in local storage
			if (savedSearches.length > 0){
	// If there are saved searches, parse them from a JSON string back into an array
			var previousSavedSearches = localStorage.getItem("savedSearches");
			savedSearches = JSON.parse(previousSavedSearches);
			}
		
	// Clear search Query field
			searchTest.value = "";
		};
		

		
	// Load saved search history entries from local storage and display it to the search history container
		
	    function loadSearchHistory (cityTest) {
			// Get from local storage saved search history and assign it to the savedSearchHistory variable
			var savedSearchHistory = localStorage.getItem("savedSearches");
		
			// If there is no previous saved searches, return false (no search history data to display)
			if (!savedSearchHistory) {
				return false;
			}
		
			// Convert saved search history string into array
			savedSearchHistory = JSON.parse(savedSearchHistory);
		
			// For loop savedSearchHistory array and make entry for each item in the list
			for (var i = 0; i < savedSearchHistory.length; i++) {
				searchHistory(savedSearchHistory[i]);
			}
		};
