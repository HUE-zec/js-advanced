// 同步：synchronous  异步：asynchronous

// 异步函数的内部代码执行过程和普通函数是一致的，默认情况下也是会被同步执行的

/*
  异步函数的返回值，异步函数会返回一个Promise
    异步函数内部return的值会被包裹到Promise.resolve()中
      如果是普通值，就是直接resolve()该值，状态为fulfilled
      如果异步函数return的是Promise，状态会由这个Promise决定
      如果异步函数return的是一个实现了thenable的对象，那么状态由then方法来决定
*/
async function foo() {
  /* 
    正常函数默认是返回undefined，
      而异步函数会返回一个Promise，
        所以异步函数默认相当于会返回 Promise.resolve(undefined)
          相当于new Promise((resolve) => resolve(undefined)
  */
}
console.log(foo()); // Promise { undefined }

async function bar() {
  return "111"
}
console.log(bar());
bar().then(res => console.log(res)) // 111

async function baz() {
  // pending -> reject
  // return new Promise((resolve, reject) => {
  //   reject("error")
  // })

  return {
    then:function(resolve, reject) {
      reject("error")
    }
  }
}
baz().catch(err => console.log(err))

/*
  异步函数中代码如果出现了异常（产生了错误），这个错误不会被浏览器立即处理，
    会对这个异常做Promise.reject()处理，也就是说通过Promise的reject来传递，此时需要通过catch捕获
*/
async function f() {
  "abc".filter()
}
f().catch(err => {
  console.log(err);
})