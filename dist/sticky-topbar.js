'use strict';

!function () {
    var model = {
        //获取数据
        init: function init() {
            var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz';
            var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },

        fetch: function fetch() {
            var query = new AV.Query('X');
            return query.find(); //Promise 对象 
        },
        //创建数据
        save: function save(name) {
            var X = AV.Object.extend('X');
            var x = new X();
            return x.save({
                'name': name
            }); //Promise 对象
        }
    };
    var view = View('#topNavBar');
    var controller = {
        view: null,
        init: function init(view) {
            this.view = view;
            this.bindEvents();
            //this.bindEvents.call(this)
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var view = this.view;
            window.addEventListener('scroll', function (x) {
                if (window.scrollY > 0) {
                    _this.active();
                } else {
                    _this.deactive();
                }
            });
        },
        active: function active() {
            this.view.classList.add('sticky');
        },
        deactive: function deactive() {
            this.view.classList.remove('sticky');
        }
    };
    controller.init(view);
    //controller.init.call(controller,view)
}.call();