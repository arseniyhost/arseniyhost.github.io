$(document).ready(function(e) {

	/*calc first button*/

	var firstNumber = $("#firstN");
	var secondNumber = $("#secondN");
	$('#sum').click(function(e) {
		$('#result').val(Number(firstNumber.val()) + Number(secondNumber.val()));

		if(secondNumber.val() == '' || firstNumber.val() == '') {
			alert('Введите число!');
		}

	});


	$('#min').click(function(e) {
		$('#result').val(Number(firstNumber.val()) - Number(secondNumber.val()));

		if(secondNumber.val() == '' || firstNumber.val() == '') {
			alert('Введите число!');
		}

	});

	$('#umnog').click(function(e) {
		$('#result').val(Number(firstNumber.val()) * Number(secondNumber.val()));

		if(secondNumber.val() == '' || firstNumber.val() == '') {
			alert('Введите число!');
		}

	});

	$('#del').click(function(e) {
		$('#result').val(Number(firstNumber.val()) / Number(secondNumber.val()));

		if(secondNumber.val() == '' || firstNumber.val() == '') {
			alert('Введите число!');
		}

	});

	$('#clear').click(function(e) {
		$('#result').val('');
		firstNumber.val('');
		secondNumber.val('');

	});


	$('.btn-case').click(function(e) {
		if($('.upper').val() == '') { 
			alert("Вы не ввели буквы!")
		}

		else
			$('.upper').css("font-size", "200%");

	});

	$('.upperClear').click(function(e) {
		if($('.upper').val() == '') { 
			alert("Вы не ввели буквы!")
		}

		else
			$('.upper').css("font-size", "100%");

	});

	/*calc second button*/	

		var firstNumb = $("#fth");
		var secondNum = $("#sth");

	$("input[type='radio']#sum2").click(function(e) {
		
		$('#resul').val(Number(firstNumb.val()) + Number(secondNum.val()));

		if(secondNum.val() == '' || firstNumb.val() == '') {
			alert('Введите число!');
		}

	});

	$("input[type='radio']#min2").change(function(e) {

		$('#resul').val(Number(firstNumb.val()) - Number(secondNum.val()));

		if(secondNum.val() == '' || firstNumb.val() == '') {
			alert('Введите число!');
		}

	});

	$("input[type='radio']#umnog2").change(function(e) {
		
		$('#resul').val(Number(firstNumb.val()) * Number(secondNum.val()));

		if(secondNum.val() == '' || firstNumb.val() == '') {
			alert('Введите число!');
		}

	});

	$("input[type='radio']#del2").change(function(e) {
		
		$('#resul').val(Number(firstNumb.val()) / Number(secondNum.val()));

		if(secondNum.val() == '' || firstNumb.val() == '') {
			alert('Введите число!');
		}

	});


	$("input[type='radio']#clear2").change(function(e) {
		$('#resul').val('');
		firstNumb.val('');
		secondNum.val('');


	});


	$('.objs').click(function(e) {
		var salaries = {
			"Вася": 100,
			"Петя": 300,
			"Даша": 250
		};

		var summ = 0;

		for(var name in salaries) {
			summ += salaries[name];
		}

		alert(summ || 0);
	});

	$('.objsec').click(function(e) {
		var salaries = {
			"Вася": 100,
			"Петя": 300,
			"Даша": 250
		};

		var max = 0;
		var maxName = "";
		for(var name in salaries) {
			if(max < salaries[name]) {
				max = salaries[name];
				maxName = name;
			}
		}

		alert( maxName || "нет сотрудников" );	
	});

	$('.nmb').click(function(e) {
		var n = prompt("Введите случайное число", '');

		if(n == '') {
			alert("Введите еще раз число");
			return false;
		}

		function Number(n) {
			if(n == 1) 
				return n.toString();
			else 
				return Number(n - 1) + " " + n;
		}

		document.getElementById('return').innerHTML = Number(n);
	});

	$('.num').click(function(e) {
		var n = prompt("Введите случайное число", '');

		function sumTo(n) {
		  var sum = 0;
		  for (var i = 1; i <= n; i++) {
		    sum += i;
		  }
		  return sum;
		}

		alert( sumTo(n) );
		
	});

	$('.num2').click(function(e) {
		var n = prompt("Введите случайное число", '');
		if(n == '') {
			alert("Введите еще раз число");
			return false;
		}

		function sumTo(n) {
		  if (n == 1) return 1;
		  return Number(n) + sumTo(n - 1);
		}

		alert( sumTo(n) );
		
	});

	$('.setInterval').click(function(e) {
		function Interval() {
		  var i = 1;
		  var time = setInterval(function() {
		    console.log(i);
		    if (i == 20) 
		    	clearInterval(time);
		    i++;
		  }, 100);
		}


		Interval();
		alert("Смотрите в консоле");
		
	});

	$('.setTimeout').click(function(e) {
		function sTimeout() {
		  var i = 1;
		  var timerId = setTimeout(function go() {
		    console.log(i);
		    if (i < 20) setTimeout(go, 100);
		    i++;
		  }, 100);
		}



		sTimeout();
		alert("Смотрите в консоле");
		
	});



	


	// $('.btn-case').click(function(e) {
	// 	$('#lorem').val() = $('#lorem').val.toUpperCase();
	// });



});