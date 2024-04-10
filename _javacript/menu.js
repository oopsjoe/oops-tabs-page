$(document).ready(function() {
    // 点击事件处理
    $("#nav li a").on("click", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#nav .slide1").css({ opacity: 1, left: +position.left, width: width });
    });

    // 鼠标悬停事件处理
    $("#nav li a").on("mouseover", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#nav .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
    });

    // 鼠标移出事件处理
    $("#nav li a").on("mouseout", function () {
        $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });

    // 设置滑动条的初始位置
    var currentWidth = $("#nav li:nth-of-type(2) a").parent("li").width();
    var current = $("#nav li:nth-of-type(2) a").position();
    $("#nav .slide1").css({ left: +current.left, width: currentWidth });
});
