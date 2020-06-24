$('.card-header').on('click', function(){        
    $(this).siblings('.card-body').slideToggle();
});


//   LAPTOP
  $('#gift-curtain-laptop, #open-laptop-gift-button').on('click', function(){
    $('#gift-curtain-laptop').children('#curtains').slideToggle(3000);

    if ($('#card-laptop').css("display") === 'none'){
        $('#card-laptop').fadeTo(2500, 0.25).fadeTo(1000, 1);
    }
});

