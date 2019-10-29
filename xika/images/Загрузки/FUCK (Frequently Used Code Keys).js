// JavaScript Document

// TABS
// 	HTML EXAMPLE
			// <ul id="menu-tabs" class="tabs">
			// 	<li class="t1"><a href="#"></a></li>
			// 	<li class="t2"><a href="#"></a></li>
			// 	<li class="t3"><a href="#"></a></li>
			// </ul>
			// <div class="tab-content">
			// 	<div class="t1">
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 	</div>
			// 	<div class="t2">
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 	</div>
			// 	<div class="t3">
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 		<div class="block">grey \ blue</div>
			// 	</div>
			// </div>

$('#menu-tabs li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.' + thisClass).fadeIn(500);
	$('#menu-tabs li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('li.t1').click();


// Ищем в родителе что-то на клик (он же аккордеон в данном случае)

$('.avatar ul li a.second').click(
	function()
	{
		ext = $(this).parent();
		$(this).find('.wrap').slideToggle('fast', function() {
		// Animation complete.
		});
		return false;
	}
);

// $('.avatar ul li a.second').click(function(){
// 		$(this).sibling('.wrap').slideToggle('fast', function() {
// 		});
// 		return false;
// 	}
// );

// Анимация чего-либо
$('#sidebar ul li').click(function(){
	$('#sidebar h2.active a p').animate({
		color: 'ivory2',
		width:"50%"
		}, 1000, function() {
			$('#header').animate({
				color: 'black',
				opacity: "0.5"
			}, 10000, function() {
					// Сюда можно загнать следующий этап анимации, точно так же, создавая что-то вроде ступенчатой анимации или цикла
			});
			// Сюда можно загнать следующий этап анимации, точно так же, создавая что-то вроде ступенчатой анимации или цикла
	});
});


// Запуск какой-либо лабуды спустя некое время от загрузки страницы

setTimeout(function(){
	$('.visual .play p').animate({
		//например
		opacity: 1,
		marginTop: 0,
		color:'white',
	}, 1000, function(){

	});
}, 5000 );
// последнее значение "5000" - собсно, время таймаута


// Удобный ховер
$(".coll").hover(
	function () {
		$(".nav").addClass('active');
		$("footer").removeClass('active');
		$('header').hide();
		//код, который будет исполняться, когда наведено
	},
	function () {
		$(".nav").removeClass('active');
		$("footer").addClass('active');
		$('header').show();
		//код, который будет исполняться, когда ушло
	}
);

// Параллакс

// $(window).bind('scroll',function(e){
// 	var scrolledY = $(window).scrollTop();
// 	$('.the stuff we need to parallax').css('top','+'+(($(window).scrollTop()*0.5))+'px');
// 	});
// }
$(window).bind('scroll',function(e){
	parallaxScroll();
	});
	function parallaxScroll(){
	var scrolledY = $(window).scrollTop();
	$('.the stuff we need to parallax').css('top','+'+(($(window).scrollTop()*0.5))+'px');
}


// Выполняется код, если есть некий класс на искомом объекте
$("#header .city").click(function() {
		if ($("#header li").hasClass('active')) { // условие выполнено, идем дальше
			$(this).removeClass('active');
		}
		else {
			$('footer').hide();
			// условие не выполнено - отрабвтывается код, что здесь, либо вообще ничего, если здесь пусто
		}
});

// якорь т.е. по клику проскролливает страницу до выбраного элемента
$('.arrow .top').click(function () {
	$('html, body').animate({
		scrollTop: $(".header ").offset().top
	}, 2000);
});


// отступ на высоту вышестоящего блока

var marginHeight = $('.parent').outerHeight();
$('.child').css('margin-top', $('.parent').outerHeight()/2 );
var marginWidth = $('.parent').outerWidth();
$('.child').css('margin-left', $('.parent').outerWidth()/2 );










$(document).ready(function() {
	// programm viewport
	$(window).scroll(function() {
		var anchb = $('#anchor');
		var top_of_element = anchb.offset().top;
		var bottom_of_element = anchb.offset().top + anchb.outerHeight();
		var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
		var top_of_screen = $(window).scrollTop();

		if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
			numberBlock();
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
});
