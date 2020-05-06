function AddDocumentaryMovies() {
    let docMovies = $(`.doc`);
    
    for(var i = 0; i < docMovies.length; i++) {
        $(docMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block" src="${documentary[i].img}" alt=""></a>`);
    }
}

function AddActionMovies() {
    let actionMovies = $(`.action`);
    
    for(var i = 0; i < actionMovies.length; i++) {
        $(actionMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block" src="${action[i].img}" alt=""></a>`);
    }
}

function AddDramaMovies() {
    let dramaMovies = $(`.drama`);
    
    for(var i = 0; i < dramaMovies.length; i++) {
        $(dramaMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block" src="${drama[i].img}" alt=""></a>`);
    }
}

function AddComedyMovies() {
    let comedyMovies = $(`.comedy`);
    
    for(var i = 0; i < comedyMovies.length; i++) {
        $(comedyMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block" src="${comedy[i].img}" alt=""></a>`);
    }
}