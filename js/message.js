var APP_ID = 'hg9Xg2ojqCnRblDNUbxva3Ba-gzGzoHsz';
var APP_KEY = '1FfsrmfHjz0LmzNIseyLJHld';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
    }).then(function (object) {
        alert('存入成功')
        console.log('存入成功')
        console.log(object)
    })
})

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })