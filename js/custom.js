$(function() {

    // trigger nice scroll plugin

    $('html').niceScroll({
        cursorcolor : '#f7600e',
        cursorwidth : '7',
        cursorborderradius : '10px',
        cursorborder : '1px solid #f7600e'
    });

    // change header height

    $('.header').height( $(window).height() );

    // scroll to features

    $('.header .arrow i').on('click', function() {

        $('html, body').animate({

            scrollTop: $('.features').offset().top 

        }, 1000);

    });

    $('.hire').click(function() {

        $('html, body').animate({

            scrollTop: $('.our-team').offset().top

        }, 1200);

    });

    // shox the hidden item with button

    $('.show-more').on('click', function() {

        $('.our-work .hidden').fadeIn(1000);

    });

    // check testimonials

    var leftArrow = $('.testim .fa-chevron-left'),

        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();
        }

    }

    checkClients();

    $('.testim i').click(function() {

        if ( $(this).hasClass('fa-chevron-right') ) {

            $('.testim .active').fadeOut(100, function(){

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();

            });
            
        } else {

            $('.testim .active').fadeOut(100, function(){

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });
            
        }

    });

});