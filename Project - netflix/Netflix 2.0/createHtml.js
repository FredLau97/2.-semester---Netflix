function createHTMLMovieString(butn, modal, className){
    
    let htmlString = `<div class="inline ${className}">
                <button type="button" class="modal-button ${butn}">             
                </button>
                <div class="modal fade ${modal}" role="dialog">
                    <div class="modal-dialog">
                    <!-- Modal content-->
                        <div class="modal-content modal-body">
                            <div class="modal-header title">
                            </div>
                            <div class="modal-body">
                                <div class = "modalPoser">       
                               </div>      
                                <div class = info>   
                                </div>                              
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Play</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    
    return htmlString;
}

function createListHTMLString(title, className){
    return ` 
<div class="container-fluid container-space">
    <h3 class="genreHeadlines">${title}</h3>
    <div class="inline">
        <button type="button" class="btn btn-dark scroll-Lbutton"> <i class="fas fa-angle-left"></i> </button>
        <div class="inline ${className}">
        <div class="movieDiv"></div>
        <button type="button" class="btn btn-dark scroll-Rbutton "><i class="fas fa-angle-right"></i></button>
        </div>
    </div>
</div>` 
}


function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}

function createAllLists(){
    let titles = ["Min liste", "Det bliver set", "Action", "Documentary", "Thriller"];
    let buttons = ["myListBtn", "watchBtn", "actBtn", "docBtn", "thrlBtn"];
    let modals = ["listModal", "watchModal", "actModal", "docModal", "thrlModal"];
    let classNames = ["listMovie","beingWatch", "actionMovie", "docMovie", "thrillerMovie" ];
    let classNames2 = ["list", "watch", "action", "doc", "thriller"];
    let resultDiv = document.createElement("div");

    for(let i = 0; i < 5; i++){
        let htmlString = createListHTMLString(titles[i], classNames[i]);
        let list = createElementFromHTML(htmlString);
        let listMovie = list.getElementsByClassName("movieDiv");       
        for(let j = 1; j < 7; j++){
            let movieHTMLString = createHTMLMovieString(buttons[i] + j, modals[i] +j, classNames2[i]);
            let movie = createElementFromHTML(movieHTMLString);
            listMovie[0].append(movie); 
        }   
        resultDiv.appendChild(list);
    }
    
    return resultDiv;
}