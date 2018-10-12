$(document).ready(function () {

    $('html').niceScroll();

    $('header').height($(window).height());

    $(window).resize(function () {

        $('header').height($(window).height());

    });

    $('header .down i').click(function () {
        $('html, body').animate({
            scrollTop: $('.nav-icon').offset().top
        }, 650)
    });
    $('#work').click(function () {
        $('html, body').animate({
            scrollTop: $('.portfolio').offset().top
        }, 650)
    });

    $('#hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.team').offset().top
        }, 800)
    });

    var more = $('.show-more'),
        less = $('.show-less'),
        hidden = $('.portfolio-images .hidden'),
        toUp = $('.to-up');

    $(more).click(function () {
        $(hidden).slideDown(600);
        $(more).slideUp(400);
        $(less).delay(400).slideDown(400);
    });

    $(less).click(function () {
        $(hidden).slideUp(600);
        $(less).slideUp(400);
        $(more).delay(400).slideDown(400);
    });


    // Back To Up Button

    if ($(toUp).length) {
        var scrollTrigger = 300, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $(toUp).fadeIn();
                } else {
                    $(toUp).fadeOut();
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $(toUp).on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 900);
        });
    }

    var leftArrow = $('.testimonials .fa-angle-left'),
        rightArrow = $('.testimonials .fa-angle-right');
    function testimonials() {
        if ( $('.test-div:first').hasClass('active') ) {
            leftArrow.fadeOut(1);
        } else {
            leftArrow.fadeIn(300);
        }
        if ( $('.test-div:last').hasClass('active') ) {
            rightArrow.fadeOut(1);
        } else {
            rightArrow.fadeIn(300);
        }
    }
    testimonials();
    $('.testimonials i').click(function () {
        if ( $(this).hasClass('fa-angle-right') ) {
            $('.testimonials .active').slideUp(300, function () {
                $(this).removeClass('active').next('.test-div').addClass('active').slideDown(300);
                testimonials();
            });
        } else {
            $('.testimonials .active').slideUp(300, function () {
                $(this).removeClass('active').prev('.test-div').addClass('active').slideDown(300);
                testimonials();
            });
        }
    });

    /* Start Our Team */

    $('.one').click( function () {
        $('.select *').removeClass('colored');
        $(this).addClass('colored');

    });

    $('.two').click( function () {
        $('.team-per:nth-child(1)').fadeOut(400);
        $('.team-per:nth-child(5)').delay(450).fadeIn(400);
        $('.select *').removeClass('colored');
        $(this).addClass('colored');
    });

    $('.three').click( function () {
        $('.team-per:nth-child(2)').fadeOut(400);
        $('.team-per:nth-child(6)').delay(450).fadeIn(400);
        $('.select *').removeClass('colored');
        $(this).addClass('colored');
    });

    $('.four').click( function () {
        $('.team-per:nth-child(3)').fadeOut(400);
        $('.team-per:nth-child(7)').delay(450).fadeIn(400);
        $('.select *').removeClass('colored');
        $(this).addClass('colored');
    });

    /* End Our Team */

});