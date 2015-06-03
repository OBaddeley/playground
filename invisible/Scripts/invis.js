$(function () {
    $("#date").datepicker();
});

$(".end").click(function () {
   $(this).css("color", "red"); 
});

//$(".middle").click(function() {
//    $(this).hide();
//});

//$(".beginning").click(function() {
//    $(this).css("background-color", "yellow");
//})

$(".inviButton").click(function() {
    $(".message").hide();
});

//$(".showButton").click(function() {
//    $(".message").show();
//});


//get the value of the textbox input
$(".showButton").click(function () {
    console.log($('.codeInput').val() === "SHOW");

    if ($('.codeInput').val() === "SHOW") {
        $(".message").show();
        //$('.codeInput').val().replaceWith("");
    }
});
