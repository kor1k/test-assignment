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