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
    $('.content-side-options__option').click(function () {
        $('.content-side-options__option').removeClass('active');
        $(this).toggleClass('active');
    })
});

$('.content-side-options__option').click(function (e) {
    e.preventDefault();
    $('.content-side-options__option').removeClass('active');
    $(event.target).addClass('active');
    $('.content-side-options__button-next-content-side').addClass('active');
    $('.content-side-main--result').addClass('active');
    $('.content-side-main-result__view-percent').text($(event.target).attr('data-perc'));
    $('.content-side-main-result__view-text').text('Людей обращает внимание на ' + $(event.target).attr('data-letter'));
});

// click on option_1 -> active - op1
// click on option_2 -> removeActive from op1 and make active op2
// $(document).ready(function () {
//     $('.option').click(function () {
//         $('.test-alert_1').toggleClass('active');
//         $('.test-alert_1').removeClass('active');
//     })
// });
//
// $(document).ready(function () {
//     $('.option').click(function () {
//         $('.test-alert_2').toggleClass('active');
//         $(this).removeClass('active');
//     })
// });
//
// $(document).ready(function () {
//     $('.option').click(function () {
//         $('.test-alert_3').toggleClass('active');
//         $(this).removeClass('active');
//     })
// });


$('.content-side-options__button-next-content-side').click(function () {
    $('.content-side-main-result').css('display', 'none')
})


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