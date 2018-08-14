'use strict';

// var model = Model({ resourceName: 'Message' })
window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        init: function init() {
            var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz';
            var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function fetch() {
            var query = new AV.Query(resourceName);
            return query.find(); //Promise 对象 
        },
        save: function save(object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object); //Promise 对象
        }

    };
};