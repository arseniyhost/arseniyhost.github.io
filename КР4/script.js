/*************************************************КР № 4********************************************************/
document.write("<h2>Tast 1</h1>");

var days = 365;
var name = "Земля";
var number = "7 млрд.";
var light = "Солнца";


document.write("Мы живем на планете" + " " + name + ", она делает один оборот вокруг" + " " + light + " за " + days + " дней." + "<br>" 
	+ "Население нашей планеты составляет примерно " + number + " человек.");

document.write("<h2>Tast 2</h1>");
var a = 5;
var b,c;

b = a * 5;
b = c = (b/2);

document.write( "<br>" +b);

document.write("<h2>Tast 3</h1>");

var mass =['Нидерланды','Польша','Канада','Коста-Рика','Австралия'];
var array = [17.09, 37.97, 36.71, 4.906, 24.6];


for(var i = 0; i < mass.length; i++) {
	document.write('<br>');
	document.write(mass[i] + ' - ' + array[i]);
}

document.write("<h2>Tast 4</h1>");

var fruits = ['апельсин','банан','груша'];

document.write('<br>');
document.write(fruits.length + " фрукта");
document.write('<br>');
for(var i = 0; i < fruits.length; i++) {
	document.write('<br>');
	document.write(fruits[i]);
}
document.write('<br>');
fruits.push("яблоко","ананас");
fruits.splice(0,0,"грейпфрут");

for(var i = 0; i < fruits.length; i++) {
	document.write('<br>');
	document.write(fruits[i]);
}

document.write('<br>' + "<br>");
document.write(fruits.length + " фруктов");
document.write('<br>');

fruits.pop();
fruits.splice(0,1);

for(var i = 0; i < fruits.length; i++) {
	document.write('<br>');
	document.write(fruits[i]);
}
document.write('<br>' + "<br>");
document.write(fruits.length + " фрукта");




document.write("<h2>Tast 5</h1>");

var fruits = ["яблоко", "апельсин", "груша", "гранат"];

for(var i = 0; i < fruits.length; i++) {
	document.write("<br>" + fruits[i]);
}

document.write("<br>");

fruits.splice(fruits.length-2,1, 'ананас');

for(var i = 0; i < fruits.length; i++) {
	document.write("<br>" + fruits[i]);
}

document.write("<br>");

var fruits2 = ["банан", "мандарин", "манго"];

for(var i = 0; i < fruits2.length; i++) {
	document.write("<br>" + fruits2[i]);
}
document.write("<br>");

fruits2.splice(1,1, "ананас");

for(var i = 0; i < fruits2.length; i++) {
	document.write("<br>" + fruits2[i]);
}
document.write("<br>");
document.write("<br>");

document.write("<h2>Tast 6</h1>");

var students = ["Сергей", "Матвей", "Лейла", "Алина", "Иоган"];

if(students.length >= 3) {
	document.write('Это большой массив');
}

else if(students.length < 3) {
	document.write("Массив мал");
}

document.write("<br>");
document.write("<br>");

document.write("<h2>Tast 7</h1>");

var students2 = ["Дмитрий", "Алексей", "Петр", "Виктор"];

if(students2.length == 4 && students2[students2.length-1] == "Виктор") {
	document.write("Мне подходит этот массив");
}

else {
	document.write("Мне не подходит");
}

document.write("<h2>Tast 8</h1>");

var a1 = 1;
var b1 = 8;
var result = (a1 + b1 < 4) ? 
	result = 'Мало' :
	result = 'Много';
document.write(result);

 


var message;

var login = prompt("Кто вы?",'');
message = (login == 'Вася') ? message = 'Привет' :
(login == 'Директор') ? message = 'Здравствуйте' :
(login =='') ? message = 'Нет логина' :
message = '';

alert(message);

// var name, password = 12345;
// var pass;

// name = prompt("Кто пришел",'');

// if(name == 'Админ') {
// 	pass = prompt('Ваш пароль', '');
// 	if(pass == password)
// 		alert('Добро пожаловать!');
// 	else if(pass == "Отмена")
// 		alert("Вход отменен");
// 	else 
// 		alert("Пароль неверен");



// }

// else if(name == "Отмена")
// 	alert("Вход отменен");

// else 
// 	alert("Я вас не знаю");

var js = prompt('Каково "официальное" название Javascript?','');

if(js == "EcmaScript") 
	alert("Верно!");
else
	alert('Не знаете? "EcmaScript"!');


/*************************************************КР № 4********************************************************/


/*************************************************КР № 5555********************************************************/

// var brower = prompt("Напишите свой браузер",'');

// if(brower == 'IE') 
// 	alert('О, да у вас IE!');

// else if(brower == 'Chrome' || brower == 'Firefox' || brower == 'Safari' || brower == 'Opera') 
// 	alert('Да, и эти браузеры мы поддерживаем');


// else 
// 	alert('Мы надеемся, что и в вашем браузере все ок!');

// var a = +prompt('a', '');

// switch(a) {
// 	case 0: 
// 		alert(0);
// 		break;
// 	case 1:
// 		alert(1);
// 		break;
// 	case 2:
// 	case 3:
// 		alert('2,3');
// 		break;
// 	default: 
// 		alert('Wrong');
// 		break;

// }




