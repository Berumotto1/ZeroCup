


window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    var index = 1;
    var animated = false;//标志动画是否运行

    var timer;

    function showButton() {

        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }


    function animate(offset) {
        animated = true;
        var newleft = parseInt(list.style.left) + offset;
        var time = 300;//位移总时间
        var interval = 3;//位移间隔时间
        var times = time / interval;
        var speed = offset / times;
        function go() {
            if (speed < 0 && parseInt(list.style.left) > newleft || speed > 0 && parseInt(list.style.left) < newleft) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                // 设置定时器
                setTimeout(go, interval);
            }
            else {
                animated = false;
                list.style.left = newleft + 'px';
                if (newleft > -530) {
                    list.style.left = -4862 + 'px';
                }
                if (newleft < -4870) {
                    list.style.left = -530 + 'px';
                }
            }
        }
        go();

        // list.style.left=parseInt(list.style.left)+offset+'px';

    }


    function play() {
        // setInterval 可以一直执行
        timer = setInterval(function () {
            next.onclick();
        }, 6000);
    }

    function stop() {
        clearInterval(timer);
    }

    next.onclick = function () {
        //向左移动六百像素

        if (!animated) {
            if (index == 5) {
                index = 1;
            }
            else {
                index = index + 1;
            }
        }
        showButton();
        if (!animated)
            if(index==3||index==4)
            animate(-1086);
            else
            animate(-1082);
        //list.style.left=parseInt(list.style.left)-600+'px';
    }

    prev.onclick = function () {
        if (!animated) {
            if (index == 1) {
                index = 5
            }
            else {
                index -= 1;
            }
        }


        showButton();
        if (!animated)
            if(index==5)
            animate(1080);
            else if(index==2)
            animate(1084)
            else
            animate(1082);
        //向右移动六百像素
        //list.style.left=parseInt(list.style.left)+600+'px';
    }

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].onclick = function () {
            if (this.className == 'on') return;
            var myIndex = parseInt(this.getAttribute('index'));
            if (!animated)
                if(myIndex==4&&index<3)
                animate((myIndex - index) * (-1080)+10);
                if(myIndex==3&&index<3)
                animate((myIndex - index) * (-1080)-7+2);
                else
                animate((myIndex - index) * (-1080)+1);
            index = myIndex;
            showButton();
            // debugger; /* 断点 */
        }

    }
    play();
    container.onmouseover = function(){
        stop();
    }
    container.onmouseout = play;

}
