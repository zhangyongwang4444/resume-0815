'use strict';

!function () {
    var view = document.querySelectorAll(' nav.menu > ul >li ');
    var controller = {
        view: null,
        liTags: null,
        init: function init(view) {
            this.view = view;
            this.selectMenu();
        },
        selectMenu: function selectMenu() {
            var liTags = document.querySelectorAll(' nav.menu > ul >li ');

            for (var i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active');
                };
                liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active');
                };
            }
        }
    };
    controller.init(view);
}.call();