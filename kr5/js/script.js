var task1 = document.getElementById('btn1');

task1.onclick = function() {
	var brower = prompt("Напишите свой браузер",'');

	if(brower == 'IE') 
		alert('О, да у вас IE!');

	else if(brower == 'Chrome' || brower == 'Firefox' || brower == 'Safari' || brower == 'Opera') 
		alert('Да, и эти браузеры мы поддерживаем');


	else 
		alert('Мы надеемся, что и в вашем браузере все ок!');
}

var task2 = document.getElementById('btn2');

task2.onclick = function() {
	var a = +prompt('a', '');

	switch(a) {
		case 0: 
			alert(0);
			break;
		case 1:
			alert(1);
			break;
		case 2:
		case 3:
			alert('2,3');
			break;
		default: 
			alert('Wrong');
			break;

	}
}



var date = new Date();

var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(seconds < 10) {
	seconds = "0" + seconds;
}

if(minutes < 10) {
	minutes =  "0" + minutes;
}

document.getElementById('text').innerHTML = hour + ":" + minutes + ":" + seconds;



// txt = document.write(hour + ":" + minutes + ":" + seconds);


var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверк","Пятница","Суббота"];
var months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

var currentDay = new Date();

var millsec = currentDay.getTime();

var task4 = document.getElementById('btn3');


function General(n) {
	var day_after_N = new Date(1000 * 60 * 60 * 24 * n);
	var millinN = day_after_N.getTime();

	var millinNowPlusN = new Date(millsec + millinN);
	document.getElementById('task4').innerHTML = "Через " + n + " дней будет вот такая дата: " + "<br>" + "<br>" + "Год: " + millinNowPlusN.getFullYear() + "<br>"
	+ "Месяц: " + months[millinNowPlusN.getMonth()] + "<br>" + "День недели: " + days[millinNowPlusN.getDay()] + "<br>" + "Число: " + millinNowPlusN.getDate() + "<br>";
	// document.write("Через " + n + " дней будет вот такая дата: " + "<br>" + "<br>");
	// document.write("Год: " + millinNowPlusN.getFullYear() + "<br>");
	// document.write("Месяц: " + months[millinNowPlusN.getMonth()] + "<br>" );
	// document.write("День недели: " + days[millinNowPlusN.getDay()] + "<br>");
	// document.write("Число: " + millinNowPlusN.getDate() + "<br>");
}

task4.onclick = function()  {
	var user = prompt("Введите число на которое вы бы хотели перевести дату");
	var n = Math.round(user);
	if(n >= 1 && n < 1000) {
		General(n);
	}
	else if(n == 0) {
		alert("Число, которое вы ввели равно 0");
	}

	else {
		alert("Вы вышли за предел!");
	}
}



	

var task5 = document.getElementById('btn5');


var forTesting = "8 пингвинов и 9 карасей";
var ttt = "00000";
task5.onclick = function () {
	string(forTesting);
}

function string(forTesting) {
	var number = /\d/;

	var result = forTesting.search(number);

	if(result == 0) {
		alert(forTesting + " - " + "Строка начинается с цифры");
	}
	else {
		alert(forTesting +" Не начинается");
	}
}


var text = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдалиновую кредитку под номером: 1103-8899-0811-1722";
var regular = /[0-9-]{19}/g;
var regular_3 = /[0-3-]{4}[0-9-]{15}/g;

var result = text.match(regular);
var result_3 = text.match(regular_3);
document.getElementById('green').innerHTML = result + " - " + "Все номера, которые были найдены в тексте" + "<br>" + "<br>" +result_3 + " - " + "Номера у которых первые 4-цифры содержат 0 1 2 3";





var tel = "8/92731/10/765";
	var sign = "-";

function find(tel,sign) {
	
	var change = tel.replace(/\//g, sign);
	document.getElementById('general').innerHTML = change;
}

find(tel,sign);



var task8 = document.getElementById('btn8');

task8.onclick = function()  {
	var str = prompt("Введите любое слово",'');
	qwerty(str);
}

function qwerty(str) {
	var top = (str.length > 10) ? alert(str + " больше 10") : (str.length == 10) ? alert(str + " равно 10") : alert(str + " меньше 10");

	return str.length;
}




var btn9 = document.getElementById('btn9');

btn9.onclick = function() {
	task9();
	document.getElementById('tiny').innerHTML = head;
	
}


function task9() {
		for(var i = 1; i < 8; i++) {
		console.log(i + " = " + i*i);
	}
}

var head = 'Смотрите в console.log'; 





var task9 = document.getElementById('btn9');

task9.onclick = function summ() {
	var first = prompt("Введите любое число",3);
	var second = prompt("Введите еще число",1);

	var sum;

	sum = Number(first) + Number(second);

	alert(sum);
}

var last = document.getElementById('btn10');

last.onclick = function() {
		var i = 0;

		while(i < 3) {
		alert("номер " + i + " !");
		i++;
	}
}













	
