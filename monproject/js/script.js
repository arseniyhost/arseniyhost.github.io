// // $(function() {
// // 	// $("#datepicker").datepicker();
// // 	// $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
// // 	$('#datepicker').datepicker({
// //     format: "mm_dd_yy"
// // });
// // });



// $('#datepicker').datepicker('option', 'beforeShowDay', highlightDays);


// // ------------------------------------------------------------------
// // highlightDays
// // ------------------------------------------------------------------
// function highlightDays(date) {
//     for (var i = 0; i < dates.length; i++) {
//         if (SOME CONDITION TO DETERMIN SPECIAL DAY) {
//             return [true, 'specialDay'];
//         }
//     }
//     return [true, ''];
// }


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
