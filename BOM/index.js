

var weAreExternal = function() {
  console.log( "Javljamo se iz dijaspore...");
 }();

 /* window.navigator
Create a function that prints out in the console the following information
●	the platform on which the browser is running
●	the information about the browser version
●	the company that created that browser
Each piece of information should be printed out in a new row.

Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is no Internet connection.
*/

var navigatore = function() {
  console.log(window.navigator.platform);
  console.log(window.navigator.appVersion);
  console.log(window.navigator.userAgent);
 }();

 var isOnline = function () {  // no function exp
  if (window.navigator.onLine) {
    console.log("online");
  } else {
    console.log("offline");
  } return 
};

/*window.screen
Create a function that prints out the following information in the console:
●	current browser width and height
●	max possible browser height
*/

var ourBrowserScreen = function () {
  console.log(window.screen.height);
  console.log(window.screen.width);
  console.log(window.screen.availHeight);
};
 
/*window.location
Write a function that prints out website’s url information in the console:
●	full url address
●	domain name
●	used protocol
●	parameters which are part of URL.

Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
*/

var myURLinformation = function () {
  console.log(window.location.href);
  console.log(window.location.hostname);
  console.log(window.location.protocol);
  console.log(window.location.search);
};

 /*  var refreshMyWeb = function () {
  return setTimeout("location.reload();", 5000);
}();   */

/* var redirect = function () {
  return window.open('http://google.com')
}();  */ 


/*window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
    
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the stored value.

Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.
*/


var saveItem = function (key, value) {
  window.localStorage.setItem(key, value);
};  

saveItem('age', '31');




var getItem = function () {
if(window.localStorage.getItem('name')){
  window.localStorage.setItem('name', 'Joko Ono');
}
}; 

var myRemoving = function () {
  window.localStorage.removeItem("name");
}(); 

/*Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.*/ 


var readinglocalStorage = function() { 

if (localStorage.length>0) {   // ako se stavi broj veci od broja unetih podataka, stampa se "There is no data"
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + " " + localStorage.getItem(localStorage.key(i)));
}
} else{
  console.log("There is no data");
}
}();




var myLocalStorage = function () {
  window.sessionStorage.setItem('names', 'Filip');
  window.sessionStorage.setItem('name', 'Darko');
  window.sessionStorage.setItem('ages', 'young');
  window.sessionStorage.setItem('age', 'veryYoung');
}();  


/*window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
*/

var forwardBack = function () {
  history.go(-2);
}();


/*Window Methods
●	Create a function that shows the user a greeting message using alert
●	Then a question is presented to the user using prompt
●	When the user provides the answer, that answer is used in the confirm dialog
●	The format of the message in the dialog should be: "We will submit this answer now! " + the answer
●	If the user clicks OK, show alert with success message
●	If the user clicks Cancel, don't show anything
*/

var welcomeMessage1 = function () {
  alert("WELCOME dear stranger to our website...");
};

welcomeMessage1;

//var welcomeMessage = function () {
//confirm(prompt("Are you crazy to enter our crazy web site?")); 
//}();


var welcomeMessage2 = function () {
var theAnswer= prompt("Are you crazy to enter our crazy web site?"); 
confirm("We will submit this answer now! " + theAnswer)
};

welcomeMessage2;



function Heroji(ime) {
  this.name = ime; 
  this.language = "serbian"
}

var herojPrvi = new Heroji(Orko);
