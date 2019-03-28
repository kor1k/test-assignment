$(document).ready(function () {
    $('#start').click(function () {
        $('.content-side-main').css('display', 'none');
        $('.content-side-options').css('display', 'flex');
        $('.footer').css('width', '62%');
    })
});

$(document).ready(function () {
    $('#btn-orange').click(function () {
        $('.content-side-options').css('display', 'none');
        $('.content-side-form').css('display', 'flex');
        $('.footer').css('width', '62%');
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
    $('.content-side-options__button-next-content-side').addClass('active').show(500);
    $('.content-side-main--result').addClass('active');
    $('.content-side-main-result__view-percent').text($(event.target).attr('data-perc'));
    $('.content-side-main-result__view-text').text('Людей обращает внимание на ' + $(event.target).attr('data-letter'));
});

$('.content-side-options__button-next-content-side').click(function () {
    $('.content-side-main-result').css('display', 'none')
});


$(document).ready(function () {
    $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').click(function () {
        $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').removeClass('active');
        $(this).toggleClass('active');
    })
});

$(document).ready(function () {
    $('.content-side-options__option').click(function () {
        $('.content-side-options__button-next-content-side').css('display', 'flex');
    })
});


// $(document).ready(function () {
//
//     $('#first_form').submit(function (e) {
//         e.preventDefault();
//         let form_name = $('#form_name').val();
//         let email = $('#email').val();
//         let password = $('#password').val();
//
//         $(".error").remove();
//
//         if (form_name.length < 1) {
//             $('#first_name').after('<span class="error">This field is required</span>');
//         }
//         if (email.length < 1) {
//             $('#email').after('<span class="error">This field is required</span>');
//         } else {
//             let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
//             let validEmail = regEx.test(email);
//             if (!validEmail) {
//                 $('#email').after('<span class="error">Enter a valid email</span>');
//             }
//         }
//         if (password.length < 8) {
//             $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
//         }
//     });
//
// });