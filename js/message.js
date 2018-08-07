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
            var query = new AV.Query('Message')
            return query.find() //Promise 对象 
        },
        //创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'name': name,
                'content': content
            })                 //Promise 对象
        }
    }
    var view = document.querySelector('section.message')
    var controller = {
        model: null,
        view: null,
        messageList: null,
        init: function (view, model) {
          
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((items) => items.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                })
                // 成功获得实例
                // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
            }, function (error) {
                // 异常处理
               

            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then((object)=> {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                let content = myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view, model)
    console.log(1)
}.call()
