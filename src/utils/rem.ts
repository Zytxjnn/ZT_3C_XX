(function(){
    function change(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth*16/1920 + 'px';
    }

    change();
    /* 监听窗口大小发生改变时 */
window.addEventListener('resize',change,false);})();

export {}
