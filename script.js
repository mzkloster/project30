$('.gift-curtain').on("click", function(){
    // $(this).children('#curtain-left').fadeOut();
    $(this).children('#curtain-left').animate({
        left: '0%',
    });
  });