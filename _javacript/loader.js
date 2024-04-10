window.addEventListener('load', function () {
    // 设置延时为 3000 毫秒（3 秒）
    setTimeout(function () {
        var box = document.querySelector('.box');
        box.classList.add('fadeOut');

        // 在动画结束后隐藏元素
        setTimeout(function () {
            box.style.display = 'none';
        }, 1000); // 确保这个延时与 fadeOut 动画的时长相匹配
    }, 3000);
});