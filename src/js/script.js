// function showFirstChooseVariants() {
//     let showC = document.getElementById('start');
//     if (showC.onmouseup === true){
//         alert('Opened')
//     }
// }
// showFirstChooseVariants();

$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("p").hide();
    // });
    $("#start").click(function(){
        $("div").show();
        $('#hide').hide();
    });

});