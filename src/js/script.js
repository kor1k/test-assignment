// function showFirstChooseVariants() {
//     let showC = document.getElementById('start');
//     if (showC.onmouseup === true){
//         alert('Opened')
//     }
// }
// showFirstChooseVariants();

$(document).ready(function () {
    $("#start").click(function () {
        $('#reg-form-section').hide();
        $("div").show();
        $('#main-page').hide();
    });
});

// $(document).ready(function () {
//     $('#continue-to-next-block').click(function () {
//         $('#reg-form-section').css('display','flex')
//     })
// })

$(document).ready(function () {
    $("#continue-to-next-block").click(function () {
        $('#main-page').hide();
        $('#first-section').hide();
        $("#reg-form-section").show();
        // $('#main-page').hide();
    });
});


$(document).ready(function () {
    $('.choose__variant').click(function () {
        $(this).css('background', '#fc8950');
        $(this).css('color', 'white');
        $('.choose__variant__next-section').css('display', 'flex');
        // $('.test_percent_and_choosed-variant-text').css('display', 'flex')
        // $(this).toggleClass('choose__variant__next-section');
        // $('.background__section').css('background', '#fc8950');
        // $('.background__section').css('opacity', '0.2');
    });
});

// $(document).ready(function () {
//     $('#variant-1').click(function () {
// $('.background__section').toggleClass('.test_percent_and_choosed-variant-text_a')
// })
// })

// (function () {
//     $('#variant-2').click(function () {
//         $('.test_percent_and_choosed-variant-text_b').css('display', 'flex')
//     })
// })
// (function () {
//     $('#variant-3').click(function () {
//         $('.test_percent_and_choosed-variant-text_v').css('display', 'flex')
//     })
// })


// $('.choose__variant__next-section').show(1500);

// $(document).ready(function () {
//     $('.choose__variant').click(function () {
//         $('.background__section').toggleClass('background__section__test-color');
//     });
// });

// if (document.getElementsByName('choose__variant'))

// $(document).ready(function () {
//     $("#variant-1").click(function () {
//         $('a').css({
//             'background-color: black'
//         });
//     })
// })

// $('.choose__variant .variant-1').click(function(){
//     $(this).toggleClass('clicked-button');
// });