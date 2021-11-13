const axios = require('axios');

//验证异步执行顺序
// console.log('----1、验证异步助兴顺序---');
// console.log('開始');
// setTimeout(() => {
//     console.log('非同步事件');
// }, 0);
// console.log('程式碼結束');
//
// //2.验证Ajax 执行顺序
// console.log('----2、验证Ajax 执行顺序---');
// let data = {}
// console.log('開始');
// axios.get('https://randomuser.me/api/').then(function(response) {
//     data = response;
// });
// console.log(data);

//3.验证promise
// console.log('----3、验证promise 执行顺序---');
// function doTask(num) {
//     return new Promise((resolve, reject) => {
//         num ? resolve(`{${num}, 成功}`) : reject('{0,失敗}');
//     });
// }
// doTask(0)
//     .then(success => {
//         console.log(success);
//     })
//     .catch(fail => {
//         console.log(fail);
//     })
// console.log('----3、验证promise 结束---');

//4.使用方法
// function print(delay, message) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("开始执行");
//             if (message){
//                 resolve("执行成功");
//             }else {
//                 reject("执行失败");
//             }
//
//         }, delay);
//     });
// }
//
// print(1000, "First")
//     .then(function (success) {
//         console.log(success)
//     })
//     .catch(function (fail) {
//         console.log(fail)
//     });

//5.一个网络请求小demo
// function getUserInfo(){
//     return new Promise(function (resolve, reject){
//         axios.get('https://randomuser.me/api/')
//             .then(function(response) {
//                 resolve(response.data)
//             });
//     });
// }
// console.log("第一步")
// getUserInfo()
//     .then(function (success){
//         console.log(success)
//     })
//     .catch(function (error){
//         console.log(error)
//     })
// console.log("第二步")
// console.log("第三步")

//6.async await 关键字 异步函数 async function 中可以使用 await 指令，await 指令后必须跟着一个 Promise，异步函数会在这个 Promise 运行中暂停，直到其运行结束再继续运行
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
//  function asyncFunc() {
//      print(1000, "First");
//      print(4000, "Second");
//      print(3000, "Third");
// }
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();


