/*$("html").click(function() {
	var speed = 1000;

	$("#second").fadeIn(speed);
	$("#third").fadeIn(speed * 2);
	$("#fourth").fadeIn(speed * 3);
	$("#fifth").fadeIn(speed * 4);
	$("#sixth").fadeIn(speed * 5);
	$("#seventh").fadeIn(speed * 6);
});

*//*

var string = $('#first').html();  

var div = document.createElement("div");
div.innerHTML = string;

var text = div.textContent || div.innerText || "";

$('#first').html("");  
  var q = jQuery.map(text.split(''), function (letter) {

    return $('<span>'+letter+'</span>');
  });

  var destination = $('#first');

  var c = 0;

  var i = setInterval(function () {

    q[c].appendTo(destination).hide().fadeIn(500);
    c += 1;

    if (c >= q.length) clearInterval(i);
  }, 1000);*/

 function randomFade() {
    var classes =["fade1","fade2","fade3","fade4","fade5","fade6"];    
    return classes[Math.floor(Math.random() * (classes.length - 1))]
  }

  function fadingViewForString(aString)
  {
    var paragraph = document.createElement("p")

     for (var i = 0, len = aString.length; i < len; i++) {
        paragraph.appendChild(fadingCharacter(aString[i]));
      }

     return paragraph;
  }



  function fadingCharacter(aCharacter)
  {
      var characterSpan = document.createElement('span');
      characterSpan.setAttribute('class',randomFade());
      characterSpan.innerText = aCharacter;
      return characterSpan;
  }

  function load()
  {
    var string = $('#first').html();  