$('.card-header').on('click', function(){        
    $(this).siblings('.card-body').slideToggle();
});

//   All gift curtains
$('.gift-alternative').children('.gift-curtain, .open-gift-button').on('click', function(){
    $(this).parent().find('#curtains').slideToggle(3000);

    if ($(this).parent().find('.card').css("display") === 'none'){
        $(this).parent().find('.card').fadeTo(2000, 0.10).fadeTo(1000, 1);
    }    
});

$(function(){

    var $w = $(window),
        $background = $('body');
  
    // Fix background image jump on mobile
    if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      $background.css({'top': 'auto', 'bottom': 0});
  
      $w.resize(sizeBackground);
      sizeBackground();
    }
  
    function sizeBackground() {
       $background.height(screen.height);
    }
  });



