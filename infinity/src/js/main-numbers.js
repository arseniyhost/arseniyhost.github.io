// $('.number').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

function count() {
    marker = false;
}

$(window).on('scroll',function() {
        var anchb = $('#anchor');
        var top_of_element = anchb.offset().top;
        var bottom_of_element = anchb.offset().top + anchb.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();

        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            numberBlock();
            $(window).off('scroll');

            // $('#anchor').attr('id', 'second');
        }
        else {
        }
        function numberBlock(){
            $('.number').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });

            });


        }
    });