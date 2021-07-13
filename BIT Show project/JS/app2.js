window.addEventListener('load', function() {
  // window.localStorage.clear();
// TV MAZE API: /shows/:id/seasons(:id je dinamicki)
// primer za detalje: https://api.tvmaze.com/shows/169
// primer za sezone: https://api.tvmaze.com/shows/169/seasons
// primer za glumce: https://api.tvmaze.com/shows/169/cast
// primer za poseter: https://api.tvmaze.com/shows/82/images
// broj sezona = duzina response-a sa /shows/:id/seasons (data.length)

var key = window.localStorage.getItem("id");  
const baseUrl = 'https://api.tvmaze.com';
let main = document.querySelector(".container");
let rightDiv = document.querySelector(".right");
let leftDiv = document.querySelector(".left");
let h2 = document.querySelector(".titleH2")


const requestTitle = new XMLHttpRequest();
requestTitle.open("GET", `${baseUrl}/shows/${key}`);
requestTitle.onload = function(){
  if(requestTitle.status === 200){
    const dataTitle = JSON.parse(requestTitle.responseText);
    h2.textContent = dataTitle.name; 
  }
}
requestTitle.send();



const requestSeasons = new XMLHttpRequest();
requestSeasons.open("GET", "http://api.tvmaze.com/shows/" + key + "/seasons");
requestSeasons.onload = function(){
  if (requestSeasons.status === 200){
    const data = JSON.parse(requestSeasons.responseText);


      //  ******* creating Season (number) ***** 
      // let mainDiv = document.createElement("div");
      let title = document.createElement("h3");
      title.textContent = "Seasons (" + data.length + ")";
      // main.append(mainDiv);
      rightDiv.append(title);
      //  ******* creating Season (number) ***** 


      //  ******* creating Season LIST ***** 
    data.forEach(function(element){
    // let listOfSeasons = document.createElement("div");
    let li = document.createElement("li");
    let ul = document.createElement("ul"); 

    let seasonTime = document.createElement("h4");
    let seasonTable = seasonTime.textContent = (element.premiereDate + " - "  + element.endDate);
    li.textContent = seasonTable; 
    // main.append(listOfSeasons);
    rightDiv.append(ul);
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
    rightDiv.append(cast);

    data.forEach(function(element){
    // let actorList = document.createElement("div");
    let actorLi = document.createElement("li");
    let actorUl = document.createElement("ul");
    let actors = document.createElement("h4");
    let actorNames = actors.textContent = element.person.name;
    actorLi.textContent=actorNames;

    // main.append(actorList);
    rightDiv.append(actorUl);
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
    divParagraph.setAttribute("class", "details");
    main.append(show);
    main.append(divParagraph);
    divParagraph.innerHTML=data.summary;   
  }
}
requestDetails.send();

/***************  POSTER ******************************** */
const requestPoster = new XMLHttpRequest();
requestPoster.open("GET", `${baseUrl}/shows/${key}/images`)
requestPoster.onload = function(){
  if (requestPoster.status === 200){
    const posterData = JSON.parse(requestPoster.responseText);
    const img = document.createElement("img");
    img.setAttribute("src", posterData[0].resolutions.original.url);
    img.classList.add("image-size");
    leftDiv.append(img);
  }
}
requestPoster.send();

/***************  POSTER ******************************** */

});

