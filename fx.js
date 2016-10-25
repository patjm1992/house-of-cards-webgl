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

$('#first, #second, #third, #fourth, #fifth, #sixth, #seventh').letterFade({
    fade: 'in',   // fade letters 'in' or 'out'
    duration: 100,  // how long the fade lasts per-letter
    delay: 1  // how long to wait between letters
});