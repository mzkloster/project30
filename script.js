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

