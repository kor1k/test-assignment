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
//     $('.option__1').click(function () {
//         $('.content-side-options__option').toggleClass('.content-side-options__option__clicked')
//     })
// });