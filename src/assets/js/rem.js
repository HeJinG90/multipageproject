//designWidth:设计稿的实际宽度值，需要根据实际设置
(function(designWidth) {
    var doc = document,
        win = window,
        docEl = doc.documentElement,
        tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = 100 * (width / designWidth);
        docEl.style.fontSize = rem + 'px';
    }
    refreshRem();
    win.addEventListener("resize", function() {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

})(750);