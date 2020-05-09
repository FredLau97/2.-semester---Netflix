function AddMovies() {
    let actionMovies = $(`.action`);
    let docMovies = $(`.doc`);
    let thrillerMovies = $(`.thriller`);
    let watchMovies = $(".watch");
    let actionData = action.slice(0, actionMovies.length);
    let docData = documentary.slice(0, docMovies.length);
    let thrillerData = thriller.slice(0, thrillerMovies.length);
    let watchData = buffer.slice(0, watchMovies.length);
    
    for(var i = 0; i < watchMovies.length; i++) {
        $(watchMovies[i]).prepend();
    }

    for(var i = 0; i<actionMovies.length; i++){
        $(actionMovies[i]).prepend();
    }
    
    for(var i = 0; i < docMovies.length; i++) {
        $(docMovies[i]).prepend();
    }
    
    for(var i = 0; i < thrillerMovies.length; i++) {
        $(thrillerMovies[i]).prepend();
    }
}

function generateSelection(currentMovies) {
    var selectedGenre = action;
    for (i = 0; i < movies.length; i++) {
        currentMovies = action.push(i);
    }
    return currentMovies;
}

function GenerateMatch(currentMovies, movieIndex) {
    
    
    $("#title").prepend(`<h1 class = "whiteText movTitle">${action[movieIndex].title}</h1>`);
    $('.movRating').prepend(`<strong>IMDB</strong>: ${action[movieIndex].rating} / 10`);
    $('.synopsis').append(`${action[movieIndex].synopsis}`);
    $('#poster').prepend(`<img class="col-12 movPoster" src="${action[movieIndex].img}">`);
    $('#year').prepend(`<p><strong>Årstal:</strong> ${action[movieIndex].year}</p>`);
}

$(document).ready(function(){
    $(".myBtn").click(function(){
        $(".myModal").modal();

    });
    $("#myBtn1").click(function(){
        $("#myModal1").modal();

    });
});