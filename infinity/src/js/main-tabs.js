function openCity(evt, cityName) {
		  var i, tabcontent, tablinks;
		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
		    tabcontent[i].style.display = "none";
		  }
		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }
		  document.getElementById(cityName).style.display = "block";
		  evt.currentTarget.className += " active";
		}

		$(".info-content").not(":first").hide();
		$(".main-features button").click(function() {
			$(".main-features button").removeClass("active").eq($(this).index()).addClass("active");
			$(".info-content").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");