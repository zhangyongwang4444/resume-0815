'use strict';

alert(120);
!function () {
    var model = Model({ resourceName: 'Message' });

    var view = View('section.message');

    var controller = Controller({
        init: function init(view, model) {
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.loadMessages();
        },
        loadMessages: function loadMessages() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                var array = messages.map(function (items) {
                    return items.attributes;
                });
                array.forEach(function (item) {
                    var li = document.createElement('li');
                    li.innerText = item.name + ':' + item.content;
                    _this.messageList.appendChild(li);
                });
                // 成功获得实例
                // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
                // 异常处理


            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this2.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            var myForm = this.form;
            var content = myForm.querySelector('input[name=content]').value;
            var name = myForm.querySelector('input[name=name]').value;
            this.model.save({ 'name': name, 'content': content }).then(function (object) {
                var li = document.createElement('li');
                li.innerText = object.attributes.name + ':' + object.attributes.content;
                var messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                var content = myForm.querySelector('input[name=content]').value = '';
            });
        }
    });
    controller.init(view, model);
    console.log(1);
}.call();