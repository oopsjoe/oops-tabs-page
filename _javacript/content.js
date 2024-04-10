document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.right ul li a');
    var contentBlocks = document.querySelectorAll('.content > div');

    // 默认显示第一个内容块，隐藏其他内容块
    function showDefaultContent() {
        contentBlocks.forEach(function(content, index) {
            content.style.display = (index === 0) ? 'flex' : 'none';
        });
    }

    showDefaultContent(); // 在页面加载时调用

    // 为每个菜单项添加点击事件监听器
    menuItems.forEach(function(item, index) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止链接默认行为

            // 隐藏所有内容块
            contentBlocks.forEach(function(content) {
                content.style.display = 'none';
            });

            // 显示与点击的菜单项对应的内容块
            if (contentBlocks[index]) {
                contentBlocks[index].style.display = 'flex';
            }
        });
    });
});
