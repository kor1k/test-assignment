$(document).ready(function () {
    $('#start').click(function () {
        $('.content-side-main').toggleClass('not-active');
        $('.content-side-options').toggleClass('active');
        $('.footer').toggleClass('active_options')
    });

    $('#btn-orange').click(function () {
        $('.content-side-options').toggleClass('not-active');
        $('.content-side-form').toggleClass('active');
        $('.footer').toggleClass('active_forms')
    });

    $('.content-side-options__option').click(function () {
        $('.content-side-options__option').removeClass('active').show(1000);
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
        $('.content-side-options__btn-to-forms').toggleClass('active')
    });

    $('.content-side-options__option').click(function (e) {
        e.preventDefault();
        $('.content-side-options__option').removeClass('active');
        $(event.target).addClass('active').show(1111);
        $('.content-side-options__btn-to-forms').addClass('active');
        $('.content-side-main--result').addClass('active');
        $('.content-side-main-result__view-percent').text($(event.target).attr('data-perc'));
        $('.content-side-main-result__view-text').text('Людей обращает внимание на ' + $(event.target).attr('data-letter'));
    });
});