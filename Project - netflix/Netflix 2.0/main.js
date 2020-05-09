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
        $(watchMovies[i]).prepend(`                <button type="button" class="modal-button myBtn">
                    <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${watchData[i].img}" alt="">
                </button>
                <div class="modal fade myModal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content modal-body">
                            <div class="modal-header ">
                                <h4 class="modal-title">${watchData[i].title}</h4>
                                <button type="button" class="close modal-body" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${watchData[i].img}" alt="">
                                <p class="actM${i}">${watchData[i].synopsis}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Play</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`);
    }

    for(var i = 0; i<actionMovies.length; i++){
        $(actionMovies[i]).prepend(`                <button type="button" class="modal-button myBtn">
                    <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${actionData[i].img}" alt="">
                </button>
                <div class="modal fade myModal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content modal-body">
                            <div class="modal-header ">
                                <h4 class="modal-title">${actionData[i].title}</h4>
                                <button type="button" class="close modal-body" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${actionData[i].img}" alt="">
                                <p class="actM${i}">${actionData[i].synopsis}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Play</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`);
    }
    
    for(var i = 0; i < docMovies.length; i++) {
        $(docMovies[i]).prepend(`                <button type="button" class="modal-button myBtn">
                    <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${docData[i].img}" alt="">
                </button>
                <div class="modal fade myModal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content modal-body">
                            <div class="modal-header ">
                                <h4 class="modal-title">${docData[i].title}</h4>
                                <button type="button" class="close modal-body" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${docData[i].img}" alt="">
                                <p class="actM${i}">${docData[i].synopsis}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Play</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`);
    }
    
    for(var i = 0; i < thrillerMovies.length; i++) {
        $(thrillerMovies[i]).prepend(`                <button type="button" class="modal-button myBtn">
                    <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${thrillerData[i].img}" alt="">
                </button>
                <div class="modal fade myModal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content modal-body">
                            <div class="modal-header ">
                                <h4 class="modal-title">${thrillerData[i].title}</h4>
                                <button type="button" class="close modal-body" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img class="moviePoster m-x-auto d-none d-sm-block actM${i}" src="${thrillerData[i].img}" alt="">
                                <p class="actM${i}">${thrillerData[i].synopsis}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Play</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`);
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