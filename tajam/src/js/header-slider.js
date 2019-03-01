
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("box");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}




// function myFunction() {
//   var x = document.getElementById("general");
//   if (x.className === "menu") {
//     x.className += " responsive";
//   } else {
//     x.className = "menu";
//   }
// }

function myFunction() {
  var x = document.getElementById("dropmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function() {

      $('#wrapper').on('click', 'a', function(event) {
        event.preventDefault();

        var id = $(this).attr('href'),
        top = $(id).offset().top;

        $('body,html').animate( {
          scrollTop: top}, 1500);
      });
      
    });



