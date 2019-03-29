$(document).ready(function () {
    $('#start').click(function () {
        $('.content-side-main').toggleClass('not-active');
        $('.content-side-options').toggleClass('active');
        $('.elementToAddAnimationTo').addClass('animationClassYouAreAdding');
        $('.footer').animate({
            width: '62%',
        }, 500);
        $('.footer__menu').animate({
            width: '80%',
        }, 500)
    });

    $('#btn-orange').click(function () {
        $('.content-side-options').toggleClass('not-active');
        $('.content-side-form').toggleClass('active');
        $('.footer').toggleClass('active_forms');
        $('.elementToAddAnimationTo').addClass('animationClassYouAreAdding');
    });

    $('.content-side-options__option').click(function () {
        $('.content-side-main-result').show(1000);
        $('.content-side-options__option').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.content-side-options__btn-to-forms').click(function () {
        $('.content-side-main-result').toggleClass('not-active');
    });

    $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').click(function () {
        $('.content-side-form__choose-sex__male, .content-side-form__choose-sex__female').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.content-side-options__option').click(function () {
        $('.content-side-options__btn-to-forms').toggleClass('active');
    });

    $('.content-side-options__option').click(function (e) {
        e.preventDefault();
        $('.content-side-options__option').removeClass('active');
        $(event.target).addClass('active');
        $('.content-side-options__btn-to-forms').addClass('active');
        $('.content-side-main-result').addClass('active');
        $('.content-side-main-result__view-percent').text($(event.target).attr('data-perc'));
        $('.content-side-main-result__view-text').text('Людей обращает внимание на ' + $(event.target).attr('data-letter'));
    });
});

$('#reg-form-submit').click(function () {

    $('#modal').addClass('open');
    $('.overlay').addClass('show');
    // $("#form_phone").val('');
    // $("#form_email").val('');
    // $("#form_email").val('');

    $('.close, .overlay').click(function () {
        $('.overlay').removeClass('show');
        $('#modal').removeClass('open');
    });
})

// function validationPatterns() {
//     let nameFlag = /^([a-zA-Z]{3,16})$/;
//     let emailFlag = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     let passwordFlag = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//     // let passwordFlag =
// }

// $('#form-fields__inputs > input').click(function () {
//     let required = $('input').filter('[required]:visible');
//     let allRequired = true;
//     required.each(function () {
//         if ($(this).val() === '') {
//             allRequired = false;
//         } else {
//             $('content-side-form__form-submit-btn').toggleClass('active');
//         }
//     });
//     if (!allRequired) {
//         $('.req-checker').toggleClass('active');
//     }
// });

$('#form-fields__inputs > input').on('keyup', function () {
    if ($('#form_name').val() !== "" && $('#form_email').val() !== "" && $('#form_pass').val().length >= 6 && $('#form_checkbox').is(':checked')) {
        $('.content-side-form__form-submit-btn').addClass('active');
    } else {
        $('.content-side-form__form-submit-btn').removeClass('active');
    }
});

console.log($('#form-fields__inputs > input'));
