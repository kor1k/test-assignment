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

// $(document).ready(function () {
//     $(".content-side-options__option").on({
//         click: function () {
//             $(this).css("background-color", "#fc8950");
//             $(this).css("color", "#fff");
//         }
//     });
// });

// $(document).ready(function () {
//     $('.content-side-options__option').click(function () {
//         $(this).toggleClass('active')
//         // console.log(e)
//     })
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").removeClass("intro");
//     });
// });


// $(document).ready(function () {
//     $(".option__1").on({
//         click: function () {
//             $(this).css("background-color", "#fc8950");
//             $(this).css("color", "#fff");
//         }
//     });
// });

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

$(document).ready(function () {
    $('.content-side-options__option').click(function () {
        $('.test-alert').css('display', 'flex')
    })
})
/*
$(document).ready(function () {
    $(".content-side-form__choose-sex__male").on({
        click: function () {
            $(this).css("background-color", "#1da7c0");
            $(this).css("color", "#fff");
        }
    });
    $(".content-side-form__choose-sex__female").on({
        click: function () {
            $(this).css("background-color", "#1da7c0");
            $(this).css("color", "#fff");
        }
    });
});
*/

$(document).ready(function () {
    $('.content-side-options__option').click(function () {
        $('.content-side-options__button-next-content-side').css('display', 'flex');
    })
});


// $(document).ready(function () {
//     $('#option-1').click(function () {
//         $('#option-1').css('background-color:','orange');
//         $('#option-2').css('background-color:','white');
//         $('#option-3').css('background-color:','white');
//     })
// })

// $(document).ready(function () {
//     $("div").removeClass("background-wrapper").addClass("background-wrapper-blur");
// })