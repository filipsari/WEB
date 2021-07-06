var button_input = document.getElementById("submit");
var country_input = document.getElementById("country");
var city_input = document.getElementById("city");
var province_input = document.getElementById("province");
var id_input = document.getElementById("ip");


var handler = function () {

var myObject = new XMLHttpRequest();

var fixedLink = "http://www.geoplugin.net/xml.gp?ip=";
var flexLink = id_input.textContent;
var link = fixedLink + flexLink;
myObject.open("GET", link);

myObject.onload = function(){
  if(myObject.status >= 200 && myObject.status <300){
    var data = myObject.responseXML;
    country_input.textContent = data.querySelector("geoplugin_countryName").textContent;
    city_input.textContent = data.querySelector("geoplugin_city").textContent;
    province_input.textContent = data.querySelector("geoplugin_region").textContent;
  }
}
myObject.send();
}

button_input.addEventListener("click", handler);