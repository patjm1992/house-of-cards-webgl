(function($){

  $.fn.letterFade = function(options, complete) {
    var ident = Math.floor(Math.random() * 1000000);

    var settings = $.extend({
        delay: 100,
        duration: 500,
        fade: 'out'
      }, options);

    var callback = function() {};

    if(typeof(complete) !== 'undefined') {
      callback = complete;
    }

    return this.each(function(){

      var $this = $(this);
      var string = $this.text();
      var letters = string.split('');

      var newstring = '';
      var opacity = '0';

      if(settings.fade === 'out') {
        opacity = '1.0';
      }

      $.each(letters, function(index, value) {
        if(value.match(/./))
          newstring += '<span style="opacity: '+opacity+'" class="blinky_'+ident+'">'+value+'</span>';
      });

  

      $this.html(newstring);
      $this.show();

      setTimeout(function() { effect(); }, settings.delay);

      var effect = function() {
        var source_opacity = 0;
        var target_opacity = 1;

        if(settings.fade === 'out') {
          source_opacity = 1;
          target_opacity = 0;
        }

        var choices = $('span.blinky_'+ident).filter(function() {
          return $(this).css('opacity') == source_opacity;
        });

        if(choices.length === 0)
          callback();

        choices = shuffle(choices);

        $(choices[0]).fadeTo(settings.duration, target_opacity, function() {
          setTimeout(function() { effect(); }, settings.delay);
        });
      };

      var shuffle = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };

    });

  };

})(jQuery);