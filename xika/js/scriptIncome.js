var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
  });

window.onscroll = function() {scrollFunction()};

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