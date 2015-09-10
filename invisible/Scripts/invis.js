//$(function () {
//    $("#date").datepicker();
//});

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

// ? Future generate the secret code word each time?

//$(".showButton").click(function() {
//    $(".message").show();
//});





//get the value of the textbox input
$(".showButton").click(function () {
    //console.log($('.codeInput').val() === "SHOW");
    console.log($('.codeInput').val());
    console.log(this);

    if ($('.codeInput').val() === "SHOW") {
        $(".message").show();
        //$('.codeInput').val().replaceWith(""); //to clear the textbox input..
        //$('.codeInput').value = "";
        //console.log($('.codeInput').val());
        $('.codeInput').val("");
       // console.log($('.codeInput').val());
    }
    else {
        $('.codeInput').val("Try again");
    }
});


