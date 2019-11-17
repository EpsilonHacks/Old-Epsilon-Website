
//NAVIGATION BAR #1


$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else{
        $('nav').removeClass('black')
    }
})



//NAVIGATION BAR #2 ending */