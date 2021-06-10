/* Selecting One/Multiple Elements

Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class that sets some background color to it.

Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.

Create one more unordered list and one more function
The function should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.
*/

function selectSecondList (){
  //  var x = document.querySelectorAll(".example");

   var d = document.querySelector("#secondList");  // selecting the second unorderd list. 
    d.className = 'second';    // giving new class to the unorder list 
}

selectSecondList();




function selectAllLi (){
    var d = document.querySelectorAll("li");
    console.log(d);  
    
    for (var i = 0; i < d.length; i++) {
        d[i].className = "red";
    }  
}
selectAllLi();




function thirdList (){
  var d = document.querySelectorAll('.third li');
  for (var i = 0; i < d.length; i++) {
      d[i].className = "yellow";
  }
}
thirdList();



// adding attributes in DOM maniuplation on photograph
var findImage = document.getElementById('slika1');
if (!findImage.hasAttribute('alt')) {
    findImage.setAttribute('alt', 'Pariz i Ajfelova kula');
}



