function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
$(document).ready(function() {
	$('.points>a').click(function() {
		$('.points>a').removeClass('active');
		if($(this).next('#dropbox').css("display") == "none") {
			$('#dropbox').hide('normal');
			$(this).next('#dropbox').toggle('normal');
			$('.points>a').removeClass('active');
			$(this).toggleClass('active');
		} else $('#dropbox').hide('normal');
		return false;
	});
});
function openCity(evt, cityName) {
		  var i, tabcontent, tablinks;
		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
		    tabcontent[i].style.display = "none";
		  }
		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }
		  document.getElementById(cityName).style.display = "block";
		  evt.currentTarget.className += " active";
		}

		$(".info-content").not(":first").hide();
		$(".main-features button").click(function() {
			$(".main-features button").removeClass("active").eq($(this).index()).addClass("active");
			$(".info-content").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
$('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// var f1;

// var links = document.getElementById('number');

// if(f1 == links) {
	
// }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-box");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if(slideIndex > slides.length) {slideIndex = 1};
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000);
  dots[slideIndex-1].className += " active";

}


function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("work-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablll");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.main-menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu-left').on('click', function() {
      // do something

      $(this).closest('.main-menu')
        .removeClass('menu_state_open');
    });
    $('.menu-right').on('click', function() {
      // do something

      $(this).closest('.main-menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);
var frame = document.querySelector('.banners')
frame.innerHTML = `<div class="banners">${frame.innerHTML + frame.innerHTML}</div>`
$(document).ready(function() {

			$('.wrapper').on('click', 'a', function(event) {
				event.preventDefault();

				var id = $(this).attr('href'),
				top = $(id).offset().top;

				$('body,html').animate( {
					scrollTop: top}, 1500);
			});
			
		});
