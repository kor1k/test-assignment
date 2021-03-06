$(document).ready(function () {
    $('#start').click(function () {
        $('.content-side-main').toggleClass('not-active');
        $('.content-side-options').toggleClass('active');
        $('.footer').animate({
            width: '62.2%',
        }, 500);
        $('.footer__menu').animate({
            width: '80%',
        }, 500)
    });

    $('#btn-orange').click(function () {
        $('.content-side-options').toggleClass('not-active');
        $('.content-side-form').toggleClass('active');
        $('.footer').toggleClass('active_forms');
    });

    $('.content-side-options__option').click(function () {
        $('.content-side-main-result').show(1000);
        $('.content-side-options__option').removeClass('active');
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

$('.content-side-options__btn-to-forms').click(function () {
    $('.content-side-main-result').toggleClass('not-active');
});

$('.content-side-form__sex__male, .content-side-form__sex__female').click(function () {
    $('.content-side-form__sex__male, .content-side-form__sex__female').removeClass('active');
    $(this).toggleClass('active');
});


// function validationPatterns() {
//     let nameFlag = /^([a-zA-Z]{3,16})$/;
//     let emailFlag = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     let passwordFlag = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// }

$('#form-fields__inputs input').on('click keyup', function () {
        console.log($('#form_checkbox').is(':checked'));
        if ($('#form_name').val() !== "" && $('#form_email').val() !== "" && $('#form_checkbox').is(':checked') == true && $('#form_pass').val().length >= 6) {
            console.log($('#form_checkbox').is(':checked'));
            $('.content-side-form__form-submit-btn').addClass('active');
            $('.form-checker').removeClass('active');
            $('#reg-form-submit').click(function () {
                $(this).location.reload(true);
            })
        } else {
            $('.content-side-form__form-submit-btn').removeClass('active');
            $('.form-checker').addClass('active');

        }
    }
);