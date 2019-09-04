$(function() {
	$("#datepicker").datepicker();
});


var btn = document.getElementById("load");
var cont = document.getElementById("content-2");
var close = document.getElementById("close");

btn.onclick = function() {
	cont.style.display = "block";
	btn.style.display = "none";
}

close.onclick = function() {
	cont.style.display = "none";
	btn.style.display = "block";
}