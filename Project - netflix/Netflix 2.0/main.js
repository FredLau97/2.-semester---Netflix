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
        $(watchMovies[i]).find(`.watchBtn${i+1}`).prepend(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${watchData[i].img}" alt="">`);
        
        $(watchMovies[i]).find(`.title`).prepend(`<h4 class="modal-title"> ${watchData[i].title} </h4>`);
        
        $(watchMovies[i]).find(`.info`).prepend(`<br><p>${watchData[i].synopsis}</p>`);
        
        $(watchMovies[i]).find(`.info`).prepend(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${watchData[i].img}" alt="">`);
    }

    for(var i = 0; i < actionMovies.length; i++){
        $(actionMovies[i]).find(`.actBtn${i+1}`).prepend(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${actionData[i].img}" alt="">`);
        
        $(actionMovies[i]).find(`.title`).prepend(`<h4 class="modal-title"> ${actionData[i].title} </h4>`);
        
        $(actionMovies[i]).find(`.info`).prepend(`<br><p>${actionData[i].synopsis}</p>`);
        
        $(actionMovies[i]).find(`.info`).prepend(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${actionData[i].img}" alt="">`);
    }
    
    for(var i = 0; i < docMovies.length; i++) {
        $(docMovies[i]).find(`.docBtn${i+1}`).prepend(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${docData[i].img}" alt="">`);
        
        $(docMovies[i]).find(`.title`).prepend(`<h4 class="modal-title"> ${docData[i].title} </h4>`);
        
        $(docMovies[i]).find(`.info`).prepend(`<br><p>${docData[i].synopsis}</p>`);
        
        $(docMovies[i]).find(`.info`).prepend(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${docData[i].img}" alt="">`);
    }
    
    
    for(var i = 0; i < thrillerMovies.length; i++) {
        $(thrillerMovies[i]).find(`.thrlBtn${i+1}`).prepend(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${thrillerData[i].img}" alt="">`);
        
        $(thrillerMovies[i]).find(`.title`).prepend(`<h4 class="modal-title"> ${thrillerData[i].title} </h4>`);
        
        $(thrillerMovies[i]).find(`.info`).prepend(`<br><p>${thrillerData[i].synopsis}</p>`);
        
        $(thrillerMovies[i]).find(`.info`).prepend(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${thrillerData[i].img}" alt="">`);
        
        
    }
}

function AddList() {
    let listMovies = $(`.list`);
    let listData = myList.slice(0, listMovies.length);
    
    for (var i = 0; i < listData.length; i++) {
        console.log(listData[i].title);
    }
    
    for(var i = 0; i < listMovies.length; i++) {
        $(listMovies[i]).find(`.myListBtn${i+1}`).html(`<img class="moviePoster m-x-auto d-none d-sm-block" src="${listData[i].img}" alt="">`);
        
        $(listMovies[i]).find(`.title`).html(`<h4 class="modal-title"> ${listData[i].title} </h4>`);
        
        $(listMovies[i]).find(`.info`).html(`<br><p>${listData[i].synopsis}</p>`);
        
        $(listMovies[i]).find(`.modalPoser`).html(`<img class="modal-Poster m-x-auto d-none d-sm-block" src="${listData[i].img}" alt="">`);
    }
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
        $('#rating p').html(`<p><strong>IMDB</strong>: ${currentMovies[movieIndex].rating} / 10</p>`);
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

function ModalButtons() {
    //Being watched MODALS FUNCTIONALITY
    $(".watchBtn1").click(function(){
        $(".watchModal1").modal();
    });
    
    $(".watchBtn2").click(function(){
        $(".watchModal2").modal();
    });
    
    $(".watchBtn3").click(function(){
        $(".watchModal3").modal();
    });
    
    $(".watchBtn4").click(function(){
        $(".watchModal4").modal();
    });
    
    $(".watchBtn5").click(function(){
        $(".watchModal5").modal();
    });
    
    $(".watchBtn6").click(function(){
        $(".watchModal6").modal();
    });
    
    //Action MODALS FUNCTIONALITY
    $(".actBtn1").click(function(){
        $(".actModal1").modal();
    });
    
    $(".actBtn2").click(function(){
        $(".actModal2").modal();
    });
    
    $(".actBtn3").click(function(){
        $(".actModal3").modal();
    });
    
    $(".actBtn4").click(function(){
        $(".actModal4").modal();
    });
    
    $(".actBtn5").click(function(){
        $(".actModal5").modal();
    });
    
    $(".actBtn6").click(function(){
        $(".actModal6").modal();
    });
    
    //Documentary MODALS FUNCTIONALITY
    $(".docBtn1").click(function(){
        $(".docModal1").modal();
    });
    
    $(".docBtn2").click(function(){
        $(".docModal2").modal();
    });
    
    $(".docBtn3").click(function(){
        $(".docModal3").modal();
    });
    
    $(".docBtn4").click(function(){
        $(".docModal4").modal();
    });
    
    $(".docBtn5").click(function(){
        $(".docModal5").modal();
    });
    
    $(".docBtn6").click(function(){
        $(".docModal6").modal();
    });
    
    //Thriller MODALS FUNCTIONALITY
    $(".thrlBtn1").click(function(){
        $(".thrlModal1").modal();
    });
    
    $(".thrlBtn2").click(function(){
        $(".thrlModal2").modal();
    });
    
    $(".thrlBtn3").click(function(){
        $(".thrlModal3").modal();
    });
    
    $(".thrlBtn4").click(function(){
        $(".thrlModal4").modal();
    });
    
    $(".thrlBtn5").click(function(){
        $(".thrlModal5").modal();
    });
    
    $(".thrlBtn6").click(function(){
        $(".thrlModal6").modal();
    });
    
    //List MODALS FUNCTIONALITY
    $(".myListBtn1").click(function(){
        $(".listModal1").modal();
    });
    
    $(".myListBtn2").click(function(){
        $(".listModal2").modal();
    });
    
    $(".myListBtn3").click(function(){
        $(".listModal3").modal();
    });
    
    $(".myListBtn4").click(function(){
        $(".listModal4").modal();
    });
    
    $(".myListBtn5").click(function(){
        $(".listModal5").modal();
    });
    
    $(".myListBtn6").click(function(){
        $(".listModal6").modal();
    });
    
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
var myList = [];

