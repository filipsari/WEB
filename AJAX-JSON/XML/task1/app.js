var endpoint = "http://www.geoplugin.net/xml.gp?ip=";

var countryDisplay = document.querySelector("#country"); 
var cityDisplay = document.querySelector("#city");
var provinceDisplay = document.querySelector("#province");
var button = document.getElementById("submit");
var inputIP = document.getElementById("ip");

function responding_function(response) {
  countryDisplay.textContent = response.querySelector("geoplugin_countryName").textContent;
  cityDisplay.textContent = response.querySelector("geoplugin_city").textContent;
  provinceDisplay.textContent = response.querySelector("geoplugin_region").textContent;
}


// 1. Creating a request 
var ourRequest = new XMLHttpRequest();
//console.log(ourRequest);



// 3. Onload handler
ourRequest.onload = function (){
  if (ourRequest.status >= 200 && ourRequest.status < 300) {
    responding_function(ourRequest.responseXML)
  }
}


function takingURL() {
  var ipAdress = inputIP.value; 
  var completeURL = endpoint + ipAdress;

// 2. Initializing a request
ourRequest.open ("GET", completeURL);

// 4. Sending a request
ourRequest.send();
}

button.addEventListener("click", takingURL);
