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

var allGenres = [documentary, drama, action, comedy, romance, thriller, crime, scifi, anim, family, short, news, sport, adventure, horror, musical, buffer];
var selectedGenres = [];

//Vælge genre via checkbox INPUT
function PickGenre(allGenres){
    
    for(i=0; i < allGenres.length; i++){
        if(HTMLInputElement == allGenres[i]){
            selectedGenres.push(allGenres[i]);
        }
        else if(selectedGenres == null){
            /* You need to select somethin */
        } 
    }
   return selectedGenres; 
}

function PickMovie(selectedGenres){
    var randomGenre = selectedGenres[Math.floor(Math.random() * selectedGenres.length)];
    var randomMovie = randomGenre[Math.floor(Math.random() * randomGenre.length)];
    return randomMovie;
}


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
    movies.push(response);
    
    for (var i = 0; i < movies[0].length; i++) {
        if (movies[0][i].genre.includes('Documentary'))
            documentary.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Drama"))
            drama.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Action"))
            action.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Comedy"))
            comedy.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Romance"))
            romance.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Thriller"))
            thriller.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Crime"))
            crime.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Sci-Fi"))
            scifi.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Animation"))
            anim.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Family"))
            family.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Short"))
            short.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("News"))
            news.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Sport"))
            sport.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Adventure"))
            adventure.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Horror"))
            horror.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre.includes("Musical"))
            musical.push(JSON.stringify(movies[0][i]));
        if (movies[0][i].genre == "null")
            buffer.push(JSON.stringify(movies[0][i]));
    }
    
  
    

    
    /*console.log("Documentary:" + documentary);
    console.log("Drama:" + drama);
    console.log("Action:" + action);
    console.log("Comedy:" + comedy);
    console.log("Romance:" + romance);
    console.log("Thriller:" + thriller);
    console.log("Crime:" + crime);
    console.log("Sci-Fi:" + scifi);
    console.log("Animation:" + anim);
    console.log("Family:" + family);
    console.log("Short:" + short);
    console.log("News:" + news);
    console.log("Sport:" + sport);
    console.log("Adventure:" + adventure);
    console.log("Horror:" + horror);
    console.log("Musical:" + musical);
    console.log("Buffer:" + buffer);*/   
});




