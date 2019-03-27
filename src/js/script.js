$(document).ready(function () {
    $('#start').click(function () {
        $('.content-side-main').css('display', 'none');
        $('.content-side-options').css('display', 'flex');
        $('.footer').css('width', '60.7%');
    })
});

$(document).ready(function () {
    $('#btn-orange').click(function () {
        $('.content-side-options').css('display', 'none');
        $('.content-side-form').css('display', 'flex');
        $('.footer').css('width', '60.7%');
    })
});

$(document).ready(function () {
    $('.content-side-options__option').click(function (e) {
        $('.content-side-options__option').removeClass('active');
        $(this).toggleClass('active');
        // $(this).toggleClass()
    })
});

$(document).ready(function () {
    $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').click(function (e) {
        $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').removeClass('active');
        $(this).toggleClass('active');
    })
});

// $(document).ready(function () {
//     $('#option-1').click(function () {
//         $('.test-alert_1').css('display', 'flex');
//         $('.test-alert_2').css('display', 'none');
//         $('.test-alert_3').css('display', 'none')
//     })
// });
//
// $(document).ready(function () {
//     $('#option-2').click(function () {
//         $('.test-alert_2').css('display', 'flex');
//         $('.test-alert_1').css('display', 'none');
//         $('.test-alert_3').css('display', 'none')
//     })
// });
//
// $(document).ready(function () {
//     $('#option-3').click(function () {
//         $('.test-alert_3').css('display', 'flex');
//         $('.test-alert_1').css('display', 'none');
//         $('.test-alert_2').css('display', 'none')
//     })
// });

$(document).ready(function () {
    $('.content-side-options__option').click(function () {
        $('.content-side-options__button-next-content-side').css('display', 'flex');
    })
});