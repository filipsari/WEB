

/* Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.

Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
Apply class to that newly selected <li> element
*/

function moveClass () {

  var selectingListItem = document.querySelector(".active");  //selecting the <li> element with class “active”.
  selectingListItem.classList.remove("active"); // removing the class “active”.
  
  var firstLi = selectingListItem.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild; 
  firstLi.classList = "active"; // adding a class
}

moveClass();