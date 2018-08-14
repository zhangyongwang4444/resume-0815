window.Controller = function (options) {
    var init = options.init
    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view, model)
            this.bindEvents.call(this)
        },
    }
    console.log('object')
    console.log(object)
    // debugger
    console.log('options')
    console.log(options)
    // debugger
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    console.log('新的 object')
    console.log(object)
    // debugger
    return object
}