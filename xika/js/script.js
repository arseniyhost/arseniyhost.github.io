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


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.987970, lng: 36.240760},
          zoom: 10
          
        });
}


$(window).scroll(function() {
  if($(this).scrollTop() > 400) {
    $(".about h2").css("margin-left", "0");
    $(".about h2").css("opacity", "1");
    $(".about .line").css("margin-left", "0");
    $(".about .line").css("opacity", "1");
    $(".about .contant-about").css("opacity", "1");
    $(".about input").css("opacity", "1");
  }


});

$(window).scroll(function() {
   if($(this).scrollTop() > 1000) {
    $(".services h2").css("margin-right", "0");
    $(".services h2").css("opacity", "1");
    $(".services .line").css("opacity", "1");
    $(".services .line").css("margin-right", "0");
    $(".services .marker").css("opacity", "1");

  }
});

$(window).scroll(function() {
   if($(this).scrollTop() > 1600) {
    $(".container-img img").css("opacity", "1");
    $(".container-img img").css("opacity", "1");
    $(".partners h2").css("margin-left", "0");
    $(".partners h2").css("opacity", "1");
    $(".partners .partof").css("opacity", "1");
    $(".partners .line").css("opacity", "1");
    $(".partners .line").css("margin-left", "0");

  }
});


$(window).scroll(function() {
   if($(this).scrollTop() > 2200) {
    $(".sert h2").css("margin-right", "0");
    $(".sert h2").css("opacity", "1");
    $(".sert .line").css("opacity", "1");
    $(".sert .line").css("margin-right", "0");
    $(".sert .sert-info").css("opacity", "1");
    $(".sert .coin").css("opacity", "1");

  }
});

$(window).scroll(function() {
   if($(this).scrollTop() > 3000) {
    $(".vacation h2").css("margin-left", "0");
    $(".vacation h2").css("opacity", "1");
    $(".vacation .line").css("opacity", "1");
    $(".vacation .line").css("margin-left", "0");
    $(".vacation .vacs").css("opacity", "1");

  }
});


$(window).scroll(function() {
   if($(this).scrollTop() > 3500) {
    $(".contact h2").css("margin-right", "0");
    $(".contact h2").css("opacity", "1");
    $(".contact .line").css("opacity", "1");
    $(".contact .line").css("margin-right", "0");
    $(".contact .down-information").css("opacity", "1");

  }
});

function myFunction() {
  var x = document.getElementById("DownMenu");
  if (x.className === "menu-top") {
    x.className += " responsive";
  } else {
    x.className = "menu-top";
  }
}