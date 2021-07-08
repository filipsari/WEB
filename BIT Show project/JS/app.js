
let div = document.querySelector("#task");
let ul = document.querySelector("ul"); 

let show =[];

let request = new XMLHttpRequest();

request.open("GET", "http://api.tvmaze.com/shows");

request.onload = function(){
  if (request.status === 200){
    let data = JSON.parse(request.responseText);
 
    data.forEach(function(element){
      show.push(element);
    })

   let sortedShow = show.sort( function(x,y){
      return y.rating.average - x.rating.average;  
   })

   let top50 = sortedShow.slice(0,50);
   top50.forEach(function(element){
    let li = document.createElement("li");
    li.textContent = element.name;
    li.setAttribute("our-key", element.id);
    ul.append(li);
   })
   
   window.localStorage.clear();

   let selectingAllLi = document.querySelectorAll("li");
   selectingAllLi.forEach(function(element){
     element.addEventListener("click", function(){
       let key = element.getAttribute("our-key");
       window.localStorage.setItem("id", key); 
       document.location="second.html"
     })
   })

  
  }
};

request.send();

