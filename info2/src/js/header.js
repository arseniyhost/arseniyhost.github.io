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