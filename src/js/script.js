// function showFirstChooseVariants() {
//     let showC = document.getElementById('start');
//     if (showC.onmouseup === true){
//         alert('Opened')
//     }
// }
// showFirstChooseVariants();

$(document).ready(function () {
    $("#start").click(function () {
        $("div").show();
        $('#hide').hide()
    });
});

$(document).ready(function () {
    $('.choose__variant').click(function () {
        $(this).css('background', '#fc8950');
        $(this).css('color', 'white');
        $(this).toggleClass('choose__variant__next-section');
        // $('.background__section').css('background', '#fc8950');
        // $('.background__section').css('opacity', '0.2');
    });
});

$(document).ready(function () {
    $('.choose__variant').click(function () {
        $('.background__section').toggleClass('background__section__test-color');
    });
});

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