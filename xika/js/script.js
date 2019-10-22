var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
  });

window.onscroll = function() {scrollFunction()};


// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll('.nav-links li');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');

//      navLinks.forEach((link, index) => {
//         if(link.style.animation) {
//           link.style.animation = ''
//         } else {
//           link.style.animation = `navLinksAnim 0.5 ease forwards ${index / 7 + 2}s`;
//         }
//     });
//      //Burger Animation
//      burger.classList.toggle('toggle');
//   });
// }

// navSlide();

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menuNav").style.position = "fixed";
    document.getElementById("menuNav").style.padding = "10px 0px";
    document.getElementById("menuNav").style.background = "rgba(0,0,0,0.7)";


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

const burger = document.querySelector('.burger-menu');
const topMenu = document.querySelector('.menuNavigator');

burger.addEventListener('click', () => {
    topMenu.style.display = (topMenu.style.display == 'block') ? '' : 'block';
    document.getElementById("menuNav").style.background = "rgba(0,0,0,0.7)";

});

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("btnLng");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }