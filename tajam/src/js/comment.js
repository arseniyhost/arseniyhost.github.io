

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