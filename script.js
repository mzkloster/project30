$('.gift-curtain.gift-laptop, #openLaptopGift').on('click', function(){
    $('.gift-laptop').children('#curtains').slideToggle(3000);

    if ($('.card-laptop').css("display") === 'none'){
        $('.card-laptop').fadeTo(3000, 0.25).fadeTo(1000, 1);
    }
});

$('.card-header').on('click', function(){        
    $(this).siblings('.card-body').toggle();
});

$('.card-header').hover(function(){
    $(this).css("background-color", "#495867");
    }, function(){
    $(this).css("background-color", "#577399");
  });



