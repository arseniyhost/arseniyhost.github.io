
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




let popup = document.getElementById('mypopup'),
  popupToggle = document.getElementById('myBtn'),
  popupClose = document.querySelector('.close');

  popupToggle.onclick = function() {
    popup.style.display = "block";
  };

  popupClose.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(e) {
    if(e.target == popup) {
      popup.style.display = "none";
    }
  }
function ChangeOpen(nameChange) {
	document.getElementById(nameChange).style.display = "block";
	document.getElementById("more").style.display = "none";
}


function ChangeClose(nameChange) {
	document.getElementById(nameChange).style.display = "none";
	document.getElementById("more").style.display = "block";
}


function Fade(nameChange, second) {
	document.getElementById(nameChange).style.display = "block";
	document.getElementById(second).style.display = "none";
	document.getElementById("fade-left").style.display = "none";
}

function FadeLeft(nameChange, second) {
	document.getElementById(nameChange).style.display = "none";
	document.getElementById(second).style.display = "block";
	document.getElementById("fade-left").style.display = "block";
}


var slideNumber = 1;
showSl(slideNumber);

function plusSlides(n) {
  showSl(slideNumber += n);
}

function Slide(n) {
  showSl(slideNumber = n);
}

function showSl(n) {
  var i;
  var slides = document.getElementsByClassName("com-slider");
  var dots = document.getElementsByClassName("dut");
  if (n > slides.length) {slideNumber = 1}    
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activekolo", "");
  }
  slides[slideNumber-1].style.display = "block";  
  dots[slideNumber-1].className += " activekolo";
}