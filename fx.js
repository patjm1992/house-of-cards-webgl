/*$("html").click(function() {
	var speed = 1000;

	$("#second").fadeIn(speed);
	$("#third").fadeIn(speed * 2);
	$("#fourth").fadeIn(speed * 3);
	$("#fifth").fadeIn(speed * 4);
	$("#sixth").fadeIn(speed * 5);
	$("#seventh").fadeIn(speed * 6);
});

*/
$(document).ready(function() {

	$("#title").typed({
	            stringsElement: $('give me five'),
	            typeSpeed: 0
	        });
	    });
/*
	$("#title").letterFade({
	    fade: 'in',   // fade letters 'in' or 'out'
	    duration: 35,  // how long the fade lasts per-letter
	    delay: -10  // how long to wait between letters
	});




	$("#tenth, #eleventh").hide();

	$("html").click(function () {
		speed = 1000;
		$("#second").fadeOut(speed);
		$("#third").fadeOut(speed);
		$("#fourth").fadeOut(speed);
		$("#fifth").fadeOut(speed);
		$("#sixth").fadeOut(speed);
		$("#seventh").fadeOut(speed);
    	$("#eighth").fadeOut(speed);
		$("#ninth").fadeOut(speed);
				$("#first").fadeOut(speed);

		$("#tenth").fadeIn(speed);
		$("#eleventh").fadeIn(speed);
	})*/
});