
/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.
*/

function takeTextAndShow () {

    var takingText = document.querySelector('.moreInformation').textContent;
    console.log(alert(takingText));
}

takeTextAndShow();



function textReplace (text) {

 var findText = document.querySelector(".lastText");  
 findText.textContent=(text);

}

textReplace("This is our new text!"); 