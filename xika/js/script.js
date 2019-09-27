var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menuNav").style.position = "fixed";
    document.getElementById("menuNav").style.padding = "10px 0px";
    document.getElementById("menuNav").style.background = "#000";


  } else {
    document.getElementById("menuNav").style.position = "static";
    document.getElementById("menuNav").style.padding = "40px 0px";
    document.getElementById("menuNav").style.background = "none";
  }
}

function myFunction() {
  var x = document.getElementById("DownMenu");
  if (x.className === "menu-top") {
    x.className += " responsive";
  } else {
    x.className = "menu-top";
  }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnLng");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}