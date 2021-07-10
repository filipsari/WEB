window.addEventListener('load', function() {
  // window.localStorage.clear();
// TV MAZE API: /shows/:id/seasons(:id je dinamicki)
// primer za detalje: https://api.tvmaze.com/shows/169
// primer za sezone: https://api.tvmaze.com/shows/169/seasons
// primer za glumce: https://api.tvmaze.com/shows/169/cast
// broj sezona = duzina response-a sa /shows/:id/seasons (data.length)

var key = window.localStorage.getItem("id");  
//console.log(localStorage);
const baseUrl = 'https://api.tvmaze.com';
let main = document.querySelector(".container");
let rightDiv = document.querySelector(".right")

const requestSeasons = new XMLHttpRequest();
requestSeasons.open("GET", "http://api.tvmaze.com/shows/" + key + "/seasons");
//requestSeasons.open("GET", `${baseUrl}/shows/${key}/seasons`, true);
// isto kao i gornji template string: requestSeasons.open("GET", baseUrl + "/shows/" + key + "/seasons")
requestSeasons.onload = function(){
  if (requestSeasons.status === 200){
    const data = JSON.parse(requestSeasons.responseText);

    
      //  ******* creating Season (number) ***** 
      let mainDiv = document.createElement("div");
      let title = document.createElement("h3");
      title.textContent = "Seasons (" + data.length + ")";
      main.append(mainDiv);
      mainDiv.append(title);
      //  ******* creating Season (number) ***** 


      //  ******* creating Season LIST ***** 
    data.forEach(function(element){
    let listOfSeasons = document.createElement("div");
    let li = document.createElement("li");
    let ul = document.createElement("ul"); 

    let seasonTime = document.createElement("h4");
    let seasonTable = seasonTime.textContent = (element.premiereDate + " --- "  + element.endDate);
    ul.textContent = seasonTable; 

    main.append(listOfSeasons);
    listOfSeasons.append(ul);
    ul.append(li);
    //  ******* creating Season LIST ***** 
    })
  }  
}
requestSeasons.send();



/***************  THE CAST ******************************** */
const requestCast = new XMLHttpRequest();
requestCast.open("GET", "https://api.tvmaze.com/shows/" + key + "/cast"); 
// requestCast.open("GET", `${baseUrl}/shows/${key}/cast`)
requestCast.onload = function(){
  if (requestCast.status === 200){
    const data = JSON.parse(requestCast.responseText);
    let cast = document.createElement("h3");
    cast.textContent = "Cast";
    main.append(cast);

    data.forEach(function(element){
    let actorList = document.createElement("div");
    let actorLi = document.createElement("li");
    let actorUl = document.createElement("ul");
    let actors = document.createElement("h4");
    var actorNames = actors.textContent = element.person.name;
    actorLi.textContent=actorNames;

    main.append(actorList);
    actorList.append(actorUl);
    actorUl.append(actorLi);
    })
  }
}
requestCast.send();
/***************  THE CAST ******************************** */




/***************  SHOW DETAILS ******************************** */
const requestDetails = new XMLHttpRequest();    //slika
// requestDetails.open("GET", "http://api.tvmaze.com/shows/" + key);
requestDetails.open("GET", `${baseUrl}/shows/${key}`)
requestDetails.onload = function(){
  if (requestDetails.status === 200){
    const data = JSON.parse(requestDetails.responseText);
    let show = document.createElement("h3");
    show.textContent = "Show details";
    let divParagraph = document.createElement("div");
   
    main.append(show);
    
    main.append(divParagraph);
    
    divParagraph.innerHTML=data.summary;
  
     
  }
}

requestDetails.send();

});

// za svaki search result, kreirati <li> i u okviru njega <a href="second.html" data-our-key={searchResult.show.id}></a>, i zatim
    // postupati identicno kao sa prvih 50 serija sa pocetne strane, klikom na seriju dohvatis njen id (iz data-our-key) i tu vrednost 
    //     ubaciti u localStorage, da kada dodjes na second.html znas koje podatke da dohvatis