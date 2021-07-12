window.addEventListener('load', function() {
  window.localStorage.clear();

  // const endpoint = "https://api.tvmaze.com/shows";
  // const endpointSearch = "https://api.tvmaze.com/search/shows?q=:";

  const baseUrl = 'https://api.tvmaze.com';

  let main = document.querySelector(".main-div");
  let top50 =[];

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
 

  const request = new XMLHttpRequest();
  request.open("GET", `${baseUrl}/shows`, true);
  request.onload = function(){
    if (request.status === 200){
      const data = JSON.parse(request.responseText);
    
    let sortedShow = data.sort( function(x,y){
        return y.rating.average - x.rating.average;  
    })

    top50 = sortedShow.slice(0,50);
    top50.forEach(function(element){
      let mainDiv = document.createElement("div");
      mainDiv.setAttribute("data-our-key", element.id);
      mainDiv.classList = "tv-div";
      let img = document.createElement("img");
      img.setAttribute("src", element.image.medium);
      let title = document.createElement("h4");
      title.textContent = element.name;
      main.append(mainDiv);
      mainDiv.append(img);
      mainDiv.append(title);
    })
    
    //  window.localStorage.clear();

    let div = document.querySelectorAll(".tv-div")
    div.forEach(function(element){
      element.addEventListener("click", function(event){
     
        let key = element.getAttribute("data-our-key");  
     
        console.log(key);
        window.localStorage.setItem("id", key);
        document.location = "second.html"
      })
    }) 
    }};
  request.send();




 /************* SEARCH INPUT FIELD ******************************************* */
 let ul = null;

 // const searchResultsWrapper = document.querySelector('.search-results');

 const btnSearch = document.getElementById('btnSearch');
 btnSearch.addEventListener('keyup', function(event) {
   console.log(event)
   if (!event.target.value) {
     return;
   }
   const requestSearch = new XMLHttpRequest();
   console.log({requestSearch})
   requestSearch.open("GET", `${baseUrl}/search/shows?q=${event.target.value}`, true);
   requestSearch.onload = function(){
     if (requestSearch.status === 200){
       const searchResultsWrapper = document.querySelector('.search-results');
       console.log({searchResultsWrapper});
       if (searchResultsWrapper && searchResultsWrapper.children.length > 0) {
         console.log('VEC POSTOJE REZULTATI PRETRAGE');
         removeAllChildNodes(searchResultsWrapper);
       }

       const searchResults = JSON.parse(requestSearch.responseText);
       console.log({searchResults})

       if (!searchResultsWrapper) {
          ul = document.createElement("ul");
          ul.classList.add('search-results');
          main.append(ul);
        }
            
       searchResults.forEach(function(element){
     
          let text = document.createElement("h5").textContent;
          let fullText= text.textContent=element.show.name
        
          let li = document.createElement("li"); 
          // li.setAttribute(`<a href="second.html"></a>`, someValue);
          li.textContent=fullText;
          
          console.log(fullText);
            
          ul.append(li);
       })  
    
     }
   }
   requestSearch.send();
 })

/************* END SEARCH INPUT FIELD ******************************************* */


})

// za svaki search result, kreirati <li> i u okviru njega <a href="second.html" data-our-key={searchResult.show.id}></a>, i zatim
    // postupati identicno kao sa prvih 50 serija sa pocetne strane, klikom na seriju dohvatis njen id (iz data-our-key) i tu vrednost 
    //     ubaciti u localStorage, da kada dodjes na second.html znas koje podatke da dohvatis

 
    // URL: /search/shows?q=:query
    // Example: https://api.tvmaze.com/search/shows?q=girls








