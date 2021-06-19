
  

// Selecting 
// Create a page that contains navigation (ul element)
// Navigation should contain odd number of elements

// Select the first element of the list and give it a bottom border

// Select all list elements and transform their text to uppercase 

// Select active element of the list and change its font color

// Find the middle one and change its background color

$('nav ul li:first-child').css({
  'border-bottom': '3px pink solid'
});

$('nav li').css({
  'text-transform': 'uppercase'
});

$('.active').css({
  'color': 'orange'
});

var smallCalculator = Math.ceil($('nav li').length/2);
$('nav ul li:nth-child(' + smallCalculator + ')').css({
'background-color':'grey'
})
