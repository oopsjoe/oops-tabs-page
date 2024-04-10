$(document).ready(function() {
    // 设置滑动条的初始位置为首页
    var $homeLink = $("#nav li:nth-of-type(2) a"); // 注意这里选择的是第二个 li 元素，因为第一个是菜单按钮
    var position = $homeLink.parent("li").position();
    var width = $homeLink.parent("li").width();
    $("#nav .slide1").css({ left: position.left, width: width });

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
});
