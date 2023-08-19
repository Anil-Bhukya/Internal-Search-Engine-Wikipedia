let searchInputEl = document.getElementById("searchInput");
function searchWikipedia(event) {
    if (event.key === "Enter") {
  
      spinnerEl.classList.remove("d-none");
      searchResultsEl.textContent = "";
  
      let searchInput = searchInputEl.value;
      let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
      let options = {
        method: "GET"
      };
  
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          let { search_results } = jsonData;
          displayResults(search_results);
        });
    }
  }
  searchInputEl.addEventListener("keydown", searchWikipedia);