function AddMovies() {
    let actionMovies = $(`.action`);
    let docMovies = $(`.doc`);
    let thrillerMovies = $(`.thriller`);
    let actionData = action.slice(0, actionMovies.length);
    let docData = documentary.slice(0, docMovies.length);
    let thrillerData = thriller.slice(0, thrillerMovies.length);
    
    for(var i = 0; i < actionMovies.length; i++) {
        $(actionMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${actionData[i].img}" alt=""></a>`);
    }
    
    for(var i = 0; i < docMovies.length; i++) {
        $(docMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block docM${i}" src="${docData[i].img}" alt=""></a>`);
    }
    
    for(var i = 0; i < thrillerMovies.length; i++) {
        $(thrillerMovies[i]).prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block thrlM${i}" src="${thrillerData[i].img}" alt=""></a>`);
    }
}
