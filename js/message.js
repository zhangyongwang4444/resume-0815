var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz';
var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((items) => items.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
    // 成功获得实例
    // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
}, function (error) {
    // 异常处理

})


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        let content = myForm.querySelector('input[name=content]').value = ''
    })
})

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })