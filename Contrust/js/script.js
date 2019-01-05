$('#box-left img').click(function() {
			var thisClass = this.className.slice(0,2);
			$('div.t1').hide();
			$('div.t2').hide();
			$('div.t3').hide();
			$('div.' + thisClass).fadeIn(500);
			$('#box-left img').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		$('img.t1').click();


		$('#mobile-btn button').click(function() {
			var thisClass = this.className.slice(0,2);
			$('div.b1').hide();
			$('div.b2').hide();
			$('div.b3').hide();
			$('div.' + thisClass).fadeIn(500);
			$('#mobile-btn img').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		$('button.b1').click();


		
		
// 		$(function(){
//     	$('#coolMenu').find('> li').hover(function(){
//         $(this).find('ul').removeClass('.menu')
//         .stop(true, true).slideToggle('fast');
//     });
// });

		$(function(){
	    $('#coolMenu li#menu ul').hide();
	    $('#coolMenu li#menu').hover(
        function(){
            $(this).find('ul').slideDown();
        }, function(){
            $(this).find('ul').slideUp('fast');
        });
});

		// $('.t1').bind("click", function() {
		// 	$('.t1').attr("src", "images/squard-empty.png");
		// });

		// $('.t2').bind("click", function() {
		// 	$('.t2').attr("src", "images/squard.png");
		// });

		// $('.t3').bind("click", function() {
		// 	$('.t3').attr("src", "images/squard.png");
		// });

		$(".t1").bind("click", function() {
      var src = ($(this).attr("src") === "images/squard-empty.png")
                    ? "images/squard.png" 
                    : "images/squard-empty.png";
      $(this).attr("src", src);
	});

		$(".t2").bind("click", function() {
      var src = ($(this).attr("src") === "images/squard.png")
                    ? "images/squard-empty.png" 
                    : "images/squard.png";
      $(this).attr("src", src);
	});

		$(".t3").bind("click", function() {
      var src = ($(this).attr("src") === "images/squard.png")
                    ? "images/squard-empty.png" 
                    : "images/squard.png";
      $(this).attr("src", src);
	});

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('button.tiny').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('.bullet-first').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('.bullet-first') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					; // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	// $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
	// 	$('#modal_form')
	// 		.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
	// 			function(){ // пoсле aнимaции
	// 				$(this).css('display', 'none'); // делaем ему display: none;
	// 				$('#overlay').fadeOut(400); // скрывaем пoдлoжку
	// 			}
	// 		);
	// });
});


$(document).ready(function() {

	$('.left-1').click(function() {
		var currentText = $('.slider-text.active');
		var currentTextIndex = $('.slider-text.active').index();
		var nextTextIndex = currentTextIndex + 1;
		var nextText = $('.slider-text').eq(nextTextIndex);
		currentText.fadeOut(1000);
		currentText.removeClass('active');

		if(nextTextIndex == ($('.slider-text:last').index()+1)) {
			$('.slider-text').eq(0).fadeIn(1000);
			$('.slider-text').eq(0).addClass('active');
		} else {
			nextText.fadeIn(1000);
			nextText.addClass('active');
		}
	});

	$('.right-1').click(function() {
		var currentText = $('.slider-text.active');
		var currentTextIndex = $('.slider-text.active').index();
		var prevTextIndex = currentTextIndex - 1;
		var prevText = $('.slider-text').eq(prevTextIndex);

		currentText.fadeOut(1000);
		currentText.removeClass('active');
		prevText.fadeIn(1000);
		prevText.addClass('active');
	});
});