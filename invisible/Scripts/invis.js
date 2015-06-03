$(function () {
    $("#date").datepicker();
});

$(".end").click(function () {
   $(this).css("color", "red"); 
});

$(".middle").click(function() {
    $(this).hide();
});

$(".beginning").click(function() {
    $(this).css("background-color", "yellow");
})