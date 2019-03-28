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


// let form_name = $('#form_name');
// let form_email = $('#form_email');
// let form_pass = $('#form_pass');
// let submit = $('#reg-form-submit');
//
// console.log(form_name)
// console.log(form_email)
// console.log(form_pass)
// console.log(submit)
