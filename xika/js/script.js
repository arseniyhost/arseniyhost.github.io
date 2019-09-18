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


$(window).on("scroll",function() {
  if($(this).width() >= 760) {
    if($(this).scrollTop() > 450) {
      $(".about h2").css("margin-left", "0");
      $(".about h2").css("opacity", "1");
      $(".about .line").css("margin-left", "0");
      $(".about .line").css("opacity", "1");
      $(".about .contant-about").css("opacity", "1");
      $(".about input").css("opacity", "1");
    }
  }
  if($(this).width() < 1000 && $(this).width() > 760) {
    if($(this).scrollTop() > 500) {
      $(".about h2").css("margin-left", "0");
      $(".about h2").css("opacity", "1");
      $(".about .line").css("margin-left", "0");
      $(".about .line").css("opacity", "1");
      $(".about .contant-about").css("opacity", "1");
      $(".about input").css("opacity", "1");
    }
  }
  if($(this).width() < 760 && $(this).width() > 452) {
    if($(this).scrollTop() > 400) {
      $(".about h2").css("margin-left", "0");
      $(".about h2").css("opacity", "1");
      $(".about .line").css("margin-left", "0");
      $(".about .line").css("opacity", "1");
      $(".about .contant-about").css("opacity", "1");
      $(".about input").css("opacity", "1");
    }
  }
  if($(this).width() < 451 && $(this).width() > 300) {
    if($(this).scrollTop() > 370) {
      $(".about h2").css("margin-left", "0");
      $(".about h2").css("opacity", "1");
      $(".about .line").css("margin-left", "0");
      $(".about .line").css("opacity", "1");
      $(".about .contant-about").css("opacity", "1");
      $(".about input").css("opacity", "1");
    }
  }
     
});

$(window).on("scroll",function() {
  if($(this).width() >= 760) {
    if($(this).scrollTop() > 1000) {
      $(".services h2").css("margin-right", "0");
      $(".services h2").css("opacity", "1");
      $(".services .line").css("opacity", "1");
      $(".services .line").css("margin-right", "0");
      $(".services .marker").css("opacity", "1");
    }
  }
  if($(this).width() < 1000 && $(this).width() > 760) {
    if($(this).scrollTop() > 1400) {
      $(".services h2").css("margin-right", "0");
      $(".services h2").css("opacity", "1");
      $(".services .line").css("opacity", "1");
      $(".services .line").css("margin-right", "0");
      $(".services .marker").css("opacity", "1");
    }
  }
  if($(this).width() < 760 && $(this).width() > 452) {
    if($(this).scrollTop() > 1300) {
      $(".services h2").css("margin-right", "0");
      $(".services h2").css("opacity", "1");
      $(".services .line").css("opacity", "1");
      $(".services .line").css("margin-right", "0");
      $(".services .marker").css("opacity", "1");
    }
  }
  if($(this).width() < 452 && $(this).width() > 300) {
    if($(this).scrollTop() > 1400) {
      $(".services h2").css("margin-right", "0");
      $(".services h2").css("opacity", "1");
      $(".services .line").css("opacity", "1");
      $(".services .line").css("margin-right", "0");
      $(".services .marker").css("opacity", "1");
    }
  }
     
});

$(window).on("scroll",function() {
  if($(this).width() >= 760) {
    if($(this).scrollTop() > 1500) {
      $(".container-img img").css("opacity", "1");
      $(".container-img img").css("opacity", "1");
      $(".partners h2").css("margin-left", "0");
      $(".partners h2").css("opacity", "1");
      $(".partners .partof").css("opacity", "1");
      $(".partners .line").css("opacity", "1");
      $(".partners .line").css("margin-left", "0");

    }
  }
  if($(this).width() < 1000 && $(this).width() > 760) {
    if($(this).scrollTop() > 2200) {
      $(".container-img img").css("opacity", "1");
      $(".container-img img").css("opacity", "1");
      $(".partners h2").css("margin-left", "0");
      $(".partners h2").css("opacity", "1");
      $(".partners .partof").css("opacity", "1");
      $(".partners .line").css("opacity", "1");
      $(".partners .line").css("margin-left", "0");
    }
  }
  if($(this).width() < 760 && $(this).width() > 452) {
    if($(this).scrollTop() > 2000) {
      $(".container-img img").css("opacity", "1");
      $(".container-img img").css("opacity", "1");
      $(".partners h2").css("margin-left", "0");
      $(".partners h2").css("opacity", "1");
      $(".partners .partof").css("opacity", "1");
      $(".partners .line").css("opacity", "1");
      $(".partners .line").css("margin-left", "0");

    }
  }
  if($(this).width() < 452 && $(this).width() > 300) {
    if($(this).scrollTop() > 2400) {
      $(".container-img img").css("opacity", "1");
      $(".container-img img").css("opacity", "1");
      $(".partners h2").css("margin-left", "0");
      $(".partners h2").css("opacity", "1");
      $(".partners .partof").css("opacity", "1");
      $(".partners .line").css("opacity", "1");
      $(".partners .line").css("margin-left", "0");

    }
  }
});

$(window).on("scroll",function() {
  if($(this).width() >= 760) {
    if($(this).scrollTop() > 2000) {
      $(".vacation h2").css("margin-right", "0");
      $(".vacation h2").css("opacity", "1");
      $(".vacation .line").css("opacity", "1");
      $(".vacation .line").css("margin-right", "0");
      $(".vacation .vacs").css("opacity", "1");

    }
  }
  if($(this).width() < 760 && $(this).width() > 452) {
    if($(this).scrollTop() > 2700) {
      $(".vacation h2").css("margin-right", "0");
      $(".vacation h2").css("opacity", "1");
      $(".vacation .line").css("opacity", "1");
      $(".vacation .line").css("margin-right", "0");
      $(".vacation .vacs").css("opacity", "1");
    }
  }
  if($(this).width() < 452 && $(this).width() > 300) {
    if($(this).scrollTop() > 3600) {
      $(".vacation h2").css("margin-right", "0");
      $(".vacation h2").css("opacity", "1");
      $(".vacation .line").css("opacity", "1");
      $(".vacation .line").css("margin-right", "0");
      $(".vacation .vacs").css("opacity", "1");

    }
  }
});

$(window).on("scroll",function() {
  if($(this).width() >= 760) {
    if($(this).scrollTop() > 2400) {
      $(".contact h2").css("margin-left", "0");
      $(".contact h2").css("opacity", "1");
      $(".contact .line").css("opacity", "1");
      $(".contact .line").css("margin-left", "0");
      $(".contact .down-information").css("opacity", "1");

    }
  }
  if($(this).width() < 760 && $(this).width() > 452) {
    if($(this).scrollTop() > 3300) {
      $(".contact h2").css("margin-left", "0");
      $(".contact h2").css("opacity", "1");
      $(".contact .line").css("opacity", "1");
      $(".contact .line").css("margin-left", "0");
      $(".contact .down-information").css("opacity", "1");

    }
  }   
  if($(this).width() <= 451 && $(this).width() >= 300) {
    if($(this).scrollTop() > 4400) {
      $(".contact h2").css("margin-left", "0");
      $(".contact h2").css("opacity", "1");
      $(".contact .line").css("opacity", "1");
      $(".contact .line").css("margin-left", "0");
      $(".contact .down-information").css("opacity", "1");

    }
  }
});

$(window).on("scroll",function() {
  if($(this).width() > 1364) {
      if($(this).scrollTop() > 2600) {
        $(".sert h2").css("margin-right", "0");
        $(".sert").css("opacity", "1");
        $(".sert .line").css("margin-right", "0");
        $(".sert .coin").css("opacity", "1");

      }
  }
  if($(this).width() < 1364) {
     if($(this).scrollTop() > 3500) {
        $(".sert h2").css("margin-right", "0");
        $(".sert").css("opacity", "1");
        $(".sert .line").css("margin-right", "0");
        $(".sert .coin").css("opacity", "1");

      }
  }

  if($(this).width() < 800 && $(this).width() > 300) {
    if($(this).scrollTop() > 7000) {
        $(".sert h2").css("margin-right", "0");
        $(".sert").css("opacity", "1");
        $(".sert .line").css("margin-right", "0");
        $(".sert .coin").css("opacity", "1");

      }
  }
});






$(window).on("scroll",function() {
  if($(this).width() > 1327) {
      if($(this).scrollTop() > 270) {
        $(".container-poligon").css("opacity", "1");

      }
  }
  if($(this).width() < 1327) {
    if($(this).scrollTop() > 400) {
      $(".container-poligon").css("opacity", "1");

    }
  }
  if($(this).width() > 800 && $(this).width() < 300) {
    if($(this).scrollTop() > 700) {
      $(".container-poligon").css("opacity", "1");

    }
  }
});

$(window).on("scroll",function() {
  if($(this).width() > 1364) {
     if($(this).scrollTop() > 1200) {
      $(".container-iac").css("opacity", "1");
      $(".container-iac").css("margin-top", "0");

    }
  }
  if($(this).width() < 1364) {
    if($(this).scrollTop() > 1500) {
      $(".container-iac").css("opacity", "1");
      $(".container-iac").css("margin-top", "0");

    }
  }
});

$(window).on("scroll",function() {
  if($(this).width() > 1364) {
      if($(this).scrollTop() > 1800) {
        $(".text-npp").css("opacity", "1");

      }
  }
  if($(this).width() < 1364) {
     if($(this).scrollTop() > 2700) {
        $(".text-npp").css("opacity", "1");

      }
  }
});

$(window).on("scroll",function() {
  if($(this).width() > 1327) {
      if($(this).scrollTop() > 600) {
      $(".text-offer").css("opacity", "1");

    }
  }
  if($(this).width() < 1327) {
    if($(this).scrollTop() > 1100) {
      $(".text-offer").css("opacity", "1");

    }
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