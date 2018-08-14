// var model = Model({ resourceName: 'Message' })
window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz'
            var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find() //Promise 对象 
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)  //Promise 对象
        }

    }
}