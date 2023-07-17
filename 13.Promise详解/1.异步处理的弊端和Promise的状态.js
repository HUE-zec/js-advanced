function execCode(counter, successCallback, failureCallback) {
  setTimeout(() => {
    if (counter > 0) {
      let total = 0
      for (let i = 0; i < counter; i ++) {
        total += i
      }
      successCallback(total)
    } else {
      failureCallback(`${counter} is wrong`)
    }
  }, 3000)
}

execCode(100, (value) => {
  console.log("执行成功", value);
}, (err) => {
  console.log("执行失败", err);
})

// es5之前很多异步任务就是类似于上面这种形式写的

// 但是有很多弊端，比如这个处理异步任务的函数是需要开发者自己设计的，我们想要调用这个函数就必须要回去看这个函数的源码，搞清楚普通变量、回调函数传参的顺序等（对于不同的人，不同的设计框架设计出来的方案可能是不同的）

/*
  可以用Promise来解决
  Promise是一个类，可以翻译成承诺、许诺、期约
    给予调用者一个承诺，通过其回调数据的时候，可以创建一个Promise对象
      再通过new创建Promise对象的时候，我们需要传入一个回调函数，我们称之为executor
        这个回调函数会被立即执行，并且给传入另外两个回调函数resolve,reject
          当我们调用resolve的时候，会执行Promise对象的then方法中传入的回调函数
          当我们调用reject的时候，会执行Promise对象的catch方法中传入的回调函数

*/

// Executor是在创建Promsie时需要传入的一个回调函数，这个回调函数会被立即执行，并且传入两个参数
// new Promise()中传入的回调函数参数会被立即执行
const promise = new Promise((resolve, reject) => {
  resolve("成功的回调")
  reject("失败的回调")
})

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

/*
  使用Promise的过程中有三个状态
  1.待定 pending：初始状态，既没有被兑现也没有被拒绝
    执行executor中的代码时，处于该状态
  2.已兑现 fulfilled：意味着操作成功完成
    执行了resolve时，处于该状态
  3.已拒绝 rejected：意味着操作失败
    执行了reject时，处于该状态

  Promise的状态一旦被确定后
    （从pending -> fulfilled 或 pending -> rejected），
      不能再通过执行某个回调函数改变其状态
        在我们调用resolve的时候，如果resolve传入的值本身不是一个Promise，那么会将该Promise的状态更改为fulfilled
          之后再去调用reject时，不会再有任何响应（并不是代码无法运行了，而是Promise的状态无法被改变了）

  通常我们会在Executor中确定我们Promise的状态
    通过resolve，可以兑现（fulfilled）Promise的状态
    通过reject，可以拒绝（rejected）Promise的状态
*/
