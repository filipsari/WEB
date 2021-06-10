// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.
// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.
function validatesForm() {
  var firstEl = document.getElementById('fname');
  if (firstEl.hasAttribute('required')) {
    firstEl.className = 'border';
  }
  var secondEl = document.getElementById('lname');
  if (secondEl.hasAttribute('required')) {
    secondEl.className = 'border';
  }
  var thirdEl = document.getElementById('password');
  if (thirdEl.hasAttribute('required')) {
    thirdEl.className = 'border';
  }
}
validatesForm();