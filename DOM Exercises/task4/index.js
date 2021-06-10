/* InnerHTML

Do the following exercise in two ways:
using DOM manipulation methods and using innerHTML.

Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/


function dropDownList2 (arr, div) {

  var selectingBody = document.querySelector("body");
  var selectingScript = document.querySelector("script");
   
   var creatingNodeDiv = document.createElement(div);  
   var creatingLabel = document.createElement("label"); 
   var creatingSelect = document.createElement("select");
  



  selectingBody.insertBefore( creatingNodeDiv,selectingScript);

  selectingBody.appendChild(creatingNodeDiv);

  creatingNodeDiv.appendChild(creatingLabel);
  creatingNodeDiv.appendChild(creatingSelect);

  var addingTextLabel = document.querySelector("label").textContent="Please choose car ";

  for (var i = 0; i < arr.length; i++) {
   var creatingOption = document.createElement("option");   // this must be inside for loop
       creatingOption.innerHTML = arr[i];
       creatingSelect.appendChild(creatingOption);
  }
// for each umesto for petlje  
// prepand

}

dropDownList2(["BMW","Opel","Audi", "Ford"], "div");


