// JavaScript Document
function GetGenres(callback) {
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogsng.p.rapidapi.com/genres",
	"method": "GET",
    "dataTyoe": "string",
	"headers": {
		"x-rapidapi-host": "unogsng.p.rapidapi.com",
		"x-rapidapi-key": "dc673d39ecmsha1be03513d10792p1fb782jsn1d5649ce19e6"
	}
}

    
$.ajax(settings).done(function (response) {
    console.log(response.results)
    
    for(var i = 0; i < response.results.length; i++){
        PLEASELIST.push(response.results[i]);
    }

    success: callback
});
}
