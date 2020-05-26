

function addMovieHelper(movies, genre, btnString ) {
    for(let i = 0; i < movies.length; i++) {
        $(movies[i]).find(`.`+ btnString + `${i+1}`).prepend(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${genre[i].img}" alt="">`);

        $(movies[i]).find(`.title`).prepend(`<h4 class="modal-title"> ${genre[i].title} </h4>`);

        $(movies[i]).find(`.info`).prepend(`<br><p>${genre[i].synopsis}</p>`);

        $(movies[i]).find(`.info`).prepend(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${genre[i].img}" alt="">`);
    }
}


function AddMovies() {
    let actionMovies = $(`.action`);
    let docMovies = $(`.doc`);
    let thrillerMovies = $(`.thriller`);
    let watchMovies = $(".watch");
    let actionData = action.slice(0, actionMovies.length);
    let docData = documentary.slice(0, docMovies.length);
    let thrillerData = thriller.slice(0, thrillerMovies.length);
    let watchData = buffer.slice(0, watchMovies.length);

    addMovieHelper(watchMovies, watchData, "watchBtn");
    addMovieHelper(actionMovies, actionData, "actBtn");
    addMovieHelper(docMovies, docData, "docBtn");
    addMovieHelper(thrillerMovies, thrillerData, "thrlBtn");
}

function AddList() {
    let listMovies = $(`.list`);
    let listData = myList.slice(0, listMovies.length);
    
    for (var i = 0; i < listData.length; i++) {
        console.log(listData[i].title);
    }
    
    addMovieHelper(listMovies, listData, "myListBtn");

}

function generateSelection(currentMovies, genre) {
    
    if (genre == "Movies") {
        for (i = 0; i < movies.length; i++) {
            if (movies[i].genre != null) {
                currentMovies.push(movies[i]);       
            }           
        }
    }
    else {
        for (i = 0; i < movies.length; i++) {
            if (movies[i].genre.includes(genre)) {
                currentMovies.push(movies[i]);       
            }      
        }   
    }
    
    return currentMovies;
}

function GenerateMatch(currentMovies, movieIndex) {
    
    if (currentMovies.length > 0) {
        $("#title h1").html(`<h1 class = "whiteText">${currentMovies[movieIndex].title}</h1>`);
        $('#rating p').html(`<p class="noMargin"><img class="ImdbLogo" src="imdblogo.png"> ${currentMovies[movieIndex].rating} / 10</p>`);
        $('#genreText p').html(`<p><strong>Genre:</strong> ${currentMovies[movieIndex].genre}</p>`);
        $('#description p').html(`<p><strong>Beskrivelse:</strong> ${currentMovies[movieIndex].synopsis}</p>`);
        $('#poster').html(`<img class="col-12 movPoster" src="${currentMovies[movieIndex].img}">`);
        $('#year p').html(`<p><strong>Årstal:</strong> ${currentMovies[movieIndex].year}</p>`);  
    }
    else {
        $("#title h1").html(`No More Movies Left`);
        $('#rating p').html(`<p></p>`);
        $('#genreText p').html(`<p></p>`);
        $('#description p').html(``);
        $('#poster').html(`<div id = "poster" class = "col-12"><img class="movPoster" src="Movie%20Match%20Logo.png"></div>`);
        $('#year p').html(`<p></p>`);  
        $("#info").html('<div id = "info" class = "container col-0 float-right">');
    }
    
}

function modalButtonsHelper(btnName, modalName){
    for(let i= 1; i < 7; i++){
         $("."+ btnName + i).click(function(){
        $("."+ modalName + i).modal();
    });
    }
}

function ModalButtons() {
    
    modalButtonsHelper("watchBtn", "watchModal");
    modalButtonsHelper("actBtn", "actModal");
    modalButtonsHelper("docBtn", "docModal");
    modalButtonsHelper("thrlBtn", "thrlModal");
    modalButtonsHelper("myListBtn", "listModal");
    
    // -.-
    $("#myBtn1").click(function () {
        $("#myModal1").modal();
    });

    $("#myBtn1").click(function () {
        $("#myModal1").modal();
    });

    $("#myBtn1").click(function () { 
        $("#myModal1").modal(); 
    });

    $("#abc").click(function () {
        $("div").removeClass("modal-backdrop");
     });
}






// My List
var myList = []; //Nice :(((((((((((((((( 




