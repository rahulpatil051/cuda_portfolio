
$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) { // use any value lower than the navbar height, [20] is an example

            $('.navbar-default').css({ // reducing the vertical padding from 25px to 10px
                'background-color':'#27AE60',
                'transition':'all 0.5s'



            });

        } else if($(window).scrollTop()<=20) {

            $('.navbar-default').css({ // reset the vertical padding to its initial value [25px]
                'background-color':'#5a57e9'

            });

        }
    });
    $('a.page-scroll').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});