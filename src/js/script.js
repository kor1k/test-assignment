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

$(document).ready(function(){
    $(".content-side-options__option").on({
        click: function(){
            $(this).css("background-color", "#fc8950");
            $(this).css("color", "#fff");
        }
    });
});

$(document).ready(function(){
    $(".content-side-form__choose-sex__male").on({
        click: function(){
            $(this).css("background-color", "#1da7c0");
            $(this).css("color", "#fff");
        }
    });
    $(".content-side-form__choose-sex__female").on({
        click: function(){
            $(this).css("background-color", "#1da7c0");
            $(this).css("color", "#fff");
        }
    });
});

$(document).ready(function () {
    $('.content-side-options__option').click(function () {
        $('.content-side-options__button-next-content-side').css('display','flex');
    })
})


// $(document).ready(function () {
//     $('.option__1').click(function () {
//         $('.content-side-options__option').toggleClass('.content-side-options__option__clicked')
//     })
// });

