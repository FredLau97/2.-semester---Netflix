// var genreArr = [];
var movieIDArr = [];
var TD = [];
var movies = [];
var url = "";

// Hent film ID fra API
function GetMovies(callback) {
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogsng.p.rapidapi.com/search?type=movie&limit=100&countrylist=78",
	"method": "GET",
    "success": "callback",
	"headers": {
		"x-rapidapi-host": "unogsng.p.rapidapi.com",
		"x-rapidapi-key": "dc673d39ecmsha1be03513d10792p1fb782jsn1d5649ce19e6"
	}
}

    
$.ajax(settings).done(function (response) {
    for(var i = 0; i < response.results.length; i++) {
        movieIDArr.push(response.results[i].nfid);
    }
    GetTitleDetails(callback);
});
}

// Få detaljeret film objekter fra API
function GetTitleDetails(callback) {
    for (var i = 0; i < movieIDArr.length; i++) {
        url = "https://unogsng.p.rapidapi.com/title?netflixid="
        url += movieIDArr[i].toString();
        var settings = {
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
    "success": "callback",
	"headers": {
		"x-rapidapi-host": "unogsng.p.rapidapi.com",
		"x-rapidapi-key": "dc673d39ecmsha1be03513d10792p1fb782jsn1d5649ce19e6"
	}
}

};
}

// Læs JSON fil med filmobjekter, og tilføj dem til movies (array)
$.getJSON("movies.json", function(response) {
    for(var i = 0; i < response.length; i++) {
        movies.push(response[i]);
    }
});