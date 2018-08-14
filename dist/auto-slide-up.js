'use strict';

!function () {
    //添加 offset 类
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }

    findClosestAndRemoveOffset();

    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset();
    });

    /* helper */
    function findClosestAndRemoveOffset() {
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = _i;
            }
        }
        for (var _i2 = 0; _i2 < specialTags.length; _i2++) {
            specialTags[_i2].classList.remove('active');
        }
        specialTags[minIndex].classList.add('active');
        //minIndex就是距离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset');
        var id = specialTags[minIndex].id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;
        var brotherAndMe = li.parentNode.children;
        for (var _i3 = 0; _i3 < brotherAndMe.length; _i3++) {
            brotherAndMe[_i3].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
}.call();