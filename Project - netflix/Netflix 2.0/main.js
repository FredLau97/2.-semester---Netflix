function AddMovies(genre) {
    let actionMovies = $(`.${genre}`);
    
    for(var i = 0; i < actionMovies.length; i++) {
        actionMovies[i].prepend(`<a href=""><img class="moviePoster m-x-auto d-none d-sm-block" src="${action[i].img}" alt=""></a>`)
    }
}