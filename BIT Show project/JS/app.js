const endpoint = "http://api.tvmaze.com/shows";
let main = document.querySelector(".main-div");
let top50 ={};

const request = new XMLHttpRequest();
request.open("GET", endpoint, true);
request.onload = function(){
  if (request.status === 200){
    const data = JSON.parse(request.responseText);
  
   let sortedShow = data.sort( function(x,y){
      return y.rating.average - x.rating.average;  
   })

   top50 = sortedShow.slice(0,50);
   top50.forEach(function(element){
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("our-key", element.id);
    mainDiv.classList = "tv-div";
    let img = document.createElement("img");
    img.setAttribute("src", element.image.medium);
    let title = document.createElement("h4");
    title.textContent = element.name;
    main.append(mainDiv);
    mainDiv.append(img);
    mainDiv.append(title);
   })
   
   window.localStorage.clear();

   let div = document.querySelectorAll(".tv-div")
   div.forEach(function(element){
     element.addEventListener("click", function(event){
       event.preventDefault();
       let key = document.querySelector(".tv-div").getAttribute("our-key");
       window.localStorage.setItem("id", key);
       document.location = "second.html"
     })
   }) 
  }};


request.send();