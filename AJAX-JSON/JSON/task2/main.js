var button = document.getElementById("button");
var img = document.querySelector(".image")

var handlerFunction = function () {

  var requestFromServer = new XMLHttpRequest();

  requestFromServer.open ("GET", "https://dog.ceo/api/breeds/image/random", true);

  requestFromServer.onload = function(){
    if (requestFromServer.status >= 200 && requestFromServer.status < 400) {
      var data = JSON.parse(requestFromServer.responseText);
      img.setAttribute("src", data.message);
    }
  };

  requestFromServer.send();
}


button.addEventListener("click", handlerFunction);