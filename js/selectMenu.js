!function () {
    var view = document.querySelectorAll(' nav.menu > ul >li ')
    var controller = {
        view: null,
        liTags:null,
        init: function (view) {
            this.view = view
            this.selectMenu()
        },
        selectMenu: function () {
            let liTags = document.querySelectorAll(' nav.menu > ul >li ');

            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init(view)
}.call()


