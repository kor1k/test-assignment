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
        $('#hide').hide();
    });
});