$(document).ready(function() {

	$('#box-left span').click(function() {
				var thisClass = this.className.slice(0,2);
				$('div.t1').hide();
				$('div.t2').hide();
				$('div.t3').hide();
				$('div.' + thisClass).fadeIn(500);
				$('#box-left span').removeClass('active');
				$(this).addClass('active');
				return false;
			});

			$('span.t1').click();





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







		$(function(){
	    $('#coolMenu li#menu ul').hide();
	    $('#coolMenu li#menu').hover(
        function(){
            $(this).find('ul').slideDown();
        }, function(){
            $(this).find('ul').slideUp('fast');
        });
	});

});

		$(document).ready(function() {
			$('#coolMenu').on('click', 'a', function(event) {
				event.preventDefault();

				var id = $(this).attr('href'),
				top = $(id).offset().top;

				$('body,html').animate( {
					scrollTop: top}, 1500);
			});


			$('.submenu').on('click', 'a', function(event) {
				event.preventDefault();

				var id = $(this).attr('href'),
				top = $(id).offset().top;

				$('body,html').animate( {
					scrollTop: top}, 1500);
			});

			$('.footer-menu').on('click', 'a', function(event) {
				event.preventDefault();

				var id = $(this).attr('href'),
				top = $(id).offset().top;

				$('body,html').animate( {
					scrollTop: top}, 1500);
			});

			$('.footer-box ul').on('click', 'a', function(event) {
				event.preventDefault();

				var id = $(this).attr('href'),
				top = $(id).offset().top;

				$('body,html').animate( {
					scrollTop: top}, 1500);
			});
		});

$(document).ready(function() { 
	$('button.tiny').click( function(event){
		event.preventDefault(); 
		$('.bullet-first').fadeIn(400, 
		 	function(){ 
				$('.bullet-first')
					.css('display', 'block') 
					; 
		});
	});
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
		var prevTextIndex = currentTextIndex + 1;
		var prevText = $('.slider-text').eq(prevTextIndex);

		currentText.fadeOut(1000);
		currentText.removeClass('active');
		prevText.fadeIn(1000);
		prevText.addClass('active');
	});
});
