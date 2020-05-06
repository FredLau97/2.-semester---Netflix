var movieIDArr = []; // Array til film IDs
var TD = []; // Array til Title Details for film
var movies = []; // Array til opbevaring af film fra JSON fil (movies.json)
var url = "https://unogsng.p.rapidapi.com/title?netflixid="; // URL adresse til brug i API call

// Arrays til de forskellige genre (buffer array til film hvor genre ikke er angivet)
var documentary = [];
var drama = [];
var action = [];
var comedy = [];
var romance = [];
var thriller = [];
var crime = [];
var scifi = [];
var anim = [];
var family = [];
var short = [];
var news = [];
var sport = [];
var adventure = [];
var horror = [];
var musical = [];
var buffer = [];

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
        movieIDArr.push(response.results[i].nfid); // Opbevare kun nfid (netflixid) feltet fra filmen
    }
    GetTitleDetails(callback);
});
}

// Få detaljeret film objekter fra API
function GetTitleDetails(callback) {
    for (var i = 0; i < movieIDArr.length; i++) {
        url += movieIDArr[i].toString(); // Tilføjer nfid til slutningen af URL adressen til API kaldet
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

$.ajax(settings).done(function (response) {
    TD.push(response);
});
};
}

// Læs JSON fil med filmobjekter, og tilføj dem til movies (array)
// Check derefter hver films genre, og tilføj filmen til dens respektive genre array
$.getJSON("movies.json", function(response) {
    for(var i = 0; i < response.length; i++) {
        movies.push(response[i]);
        
        if (response[i].genre.includes('Documentary'))
            documentary.push(response[i]);
        if (response[i].genre.includes("Drama"))
            drama.push(response[i]);
        if (response[i].genre.includes("Action"))
            action.push(response[i]);
        if (response[i].genre.includes("Comedy"))
            comedy.push(response[i]);
        if (response[i].genre.includes("Romance"))
            romance.push(response[i]);
        if (response[i].genre.includes("Thriller"))
            thriller.push(response[i]);
        if (response[i].genre.includes("Crime"))
            crime.push(response[i]);
        if (response[i].genre.includes("Sci-Fi"))
            scifi.push(response[i]);
        if (response[i].genre.includes("Animation"))
            anim.push(response[i]);
        if (response[i].genre.includes("Family"))
            family.push(response[i]);
        if (response[i].genre.includes("Short"))
            short.push(response[i]);
        if (response[i].genre.includes("News"))
            news.push(response[i]);
        if (response[i].genre.includes("Sport"))
            sport.push(response[i]);
        if (response[i].genre.includes("Adventure"))
            adventure.push(response[i]);
        if (response[i].genre.includes("Horror"))
            horror.push(response[i]);
        if (response[i].genre.includes("Musical"))
            musical.push(response[i]);
        if (response[i].genre == "null")
            buffer.push(response[i]);
    }
});
