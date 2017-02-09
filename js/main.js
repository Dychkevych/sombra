//   Carousel
$(document).ready(function() {
    $('#media').carousel({
        pause: true,
        interval: false
    });
});


// ----- BACK to Top ---- //

$(document).ready(function(){

    // hide #back-top first
    $('#back-top').hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 900) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $("#back-top a").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});

// ----HAMBURGER ----//

$('.btn-nav').click(function(){
    $('.btn-nav').toggleClass('active');
    $('.navigation').toggleClass('active');
});


// ---- Scroll Anhors --- //

$(document).ready(function(){

    $("#scrollNav").on("click","a", function (event) {
        event.preventDefault();


        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-95}, 1500);

    });

});

//   ScrollTop

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 800) {
            $('nav.navigation-wrapper').addClass('stickytop');
        }
        else{
            $('nav.navigation-wrapper').removeClass('stickytop');
        }
    });
});

