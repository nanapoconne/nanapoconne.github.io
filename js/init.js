(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    // ココ以下は波紋生成
    $('body').ripples({
      resolution: 1024,
      dropRadius: 20,
      perturbance: 0.04,
    });


  }); // end of document ready

  setInterval(function () {
    var $el = $('body');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);

})(jQuery); // end of jQuery name space

