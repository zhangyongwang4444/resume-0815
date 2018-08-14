'use strict';

!function () {
    var view = document.querySelector('nav.menu');
    var controller = {
        view: null,
        aTags: null,
        init: function init(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var top = element.offsetTop;
            var currentTop = window.scrollY;
            var targetTop = top - 80;
            var s = targetTop - currentTop;
            var coords = { y: currentTop };
            var t = Math.abs(s / 100 * 300);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
            for (var i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    x.preventDefault();
                    var a = x.currentTarget;
                    var href = a.getAttribute('href'); //'#siteAbout'
                    var element = document.querySelector(href);
                    _this.scrollToElement(element);
                    // let top = element.offsetTop
                    // let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
                };
            }
        }

    };
    controller.init(view);
}.call();