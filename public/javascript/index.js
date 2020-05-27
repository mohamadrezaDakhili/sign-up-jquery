$("#box-btn").on("click", "div", function () {
    let colorBtn = $(this).css("background-color");
    let boxLeft = $("#box-left");
    let color = boxLeft.css("background-color")
    boxLeft.css("background-color" , colorBtn)
    $(this)[0].style.setProperty('background-color', color, 'important');
});
$("#menu").on("click" , function () {
    $("#box-right").addClass("col-12")
});