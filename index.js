/*
// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


*/

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});











//NAVIGATION BAR #1
/*

$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else{
        $('nav').removeClass('black')
    }
})

//RESPONSIVE STUFF

/* only execute this script when the document is ready 
$(document).ready(function(){
    /* function called when you click of the button 
    $("button").click(function(){
        
        /* this if else to change the text in the button 
        if($("button").text() == "☰"){
         $("button").text("🞬");
        }else{
          $("button").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements 
      $("li").toggle("slow");
    });
  });

//NAVIGATION BAR #2 ending */