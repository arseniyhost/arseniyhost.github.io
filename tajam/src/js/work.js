function ChangeOpen(nameChange) {
	document.getElementById(nameChange).style.display = "block";
	document.getElementById("more").style.display = "none";
}


function ChangeClose(nameChange) {
	document.getElementById(nameChange).style.display = "none";
	document.getElementById("more").style.display = "block";
}


function Fade(nameChange, second) {
	document.getElementById(nameChange).style.display = "block";
	document.getElementById(second).style.display = "none";
	document.getElementById("fade-left").style.display = "none";
}

function FadeLeft(nameChange, second) {
	document.getElementById(nameChange).style.display = "none";
	document.getElementById(second).style.display = "block";
	document.getElementById("fade-left").style.display = "block";
}