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
// $('.number').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

function count() {
    marker = false;
}

$(window).on('scroll',function() {
        var anchb = $('#anchor');
        var top_of_element = anchb.offset().top;
        var bottom_of_element = anchb.offset().top + anchb.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();

        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            numberBlock();
            $(window).off('scroll');

            // $('#anchor').attr('id', 'second');
        }
        else {
        }
        function numberBlock(){
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


        }
    });
$(document).ready(function() {
  $(".slider").each(function() {

 var repeats = 5, // кількість повторювань автоматичного прокручування
 interval = 1, // інтервал в секундах
 repeat = true, // чи треба автоматично прокручувати (true/false)
 slider = $(this),
 repeatCount = 0,
 elements = $(slider).find("li").length;

 $(slider)
 .append("<div class='nav'></div>")
 .find("li").each(function() {
 $(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
 $(this).attr("data-slide", $(this).index());
 })
 .end()
 .find("span").first().addClass("on");

 // add timeout

 if (repeat) {
 repeat = setInterval(function() {
 if (repeatCount >= repeats - 1) {
 window.clearInterval(repeat);
 }

 var index = $(slider).find('.on').data("slide"),
 nextIndex = index + 1 < elements ? index + 1 : 0;

 sliderJS(nextIndex, slider);

 repeatCount += 1;
 }, interval * 5000);
 }

 });
 });

function sliderJS(index, slider) { // slide
 var ul = $(slider).find("ul"),
 bl = $(slider).find("li[data-slide=" + index + "]"),
 step = $(bl).width();

 $(slider)
 .find("span").removeClass("on")
 .end()
 .find("span[data-slide=" + index + "]").addClass("on");

 $(ul).animate({
 marginLeft: "-" + step * index
 }, 2000);
}

$(document).on("click", ".slider .nav span", function(e) { // slider click navigate
 e.preventDefault();
 var slider = $(this).closest(".slider"),
 index = $(this).data("slide");

 sliderJS(index, slider);
});


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

function provForm() {
	var obj_form = document.getElementsByClassName('forms');
	var obj_form_head = document.getElementsByClassName('formshead');

	obj_form.submit();
	obj_form_head.submit();
}