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
        li.innerText = item.content
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
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
    }).then(function (object) {
        window.location.reload()
    })
})

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })