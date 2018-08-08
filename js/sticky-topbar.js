!function () {
    var model = {
        //获取数据
        init: function () {
            var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz'
            var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },

        fetch: function () {
            var query = new AV.Query('X')
            return query.find() //Promise 对象 
        },
        //创建数据
        save: function (name) {
            var X = AV.Object.extend('X');
            var x = new X();
            return x.save({
                'name': name
            })                 //Promise 对象
        }
    }
    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    //controller.init.call(controller,view)
}.call()
