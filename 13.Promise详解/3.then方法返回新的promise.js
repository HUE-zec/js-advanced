// then方法本身是会返回一个Promise的，所以我们可以进行如下的链式调用
const promise = new Promise((resolve, reject) => {
  resolve("成功调用")
})

const newPromise = new Promise((resolve, reject) => {
  resolve("555")
})

// 链式调用
promise.then(res => { // 此处是由上面的resolve("成功调用")决议的，那下面的then是在等待谁的决议结果呢？
  console.log("第一个then方法", res);
  /*
    当前这个then内部，相当于会类似new Promise((resolve) => {})，
      然后在其中执行当前then中传入的回调函数，
        并且将该回调函数的返回值作为resolve中的参数并执行
          然后下一次链式调用的then则接收这个决议
  */
  return "222" // 这个返回值会作为当前then返回的Promise中resolve()中的参数
}).then(res => { // 上一个then方法本身返回一个新的Promise对象，此处的then是在这个新的Promise有决议后才会执行
  console.log("第二个then方法", res);
  return "333"
}).then(res => { // 同理，也是上一个then方法中返回的Promise的决议来执行
  console.log("第三个then方法", res);
  return "444"
}).then(res => {
  console.log("第四个then方法", res);
  // return newPromise // 如果then中传入的回调函数返回的是promise，先相当于当前then中new Promise时，resolve(newPromise)，那么就要等待这个newPromise的决议来决定当前then中要返回Promise的决议

  return { // 类似道理，当前then中new Promise时将这个对象作为resolve的参数并执行
    then: function(resolve) {
      resolve("555")
    }
  }
}).then(res => { // 此处等待的应该是上一个then返回的Promise的决议（而这个Promise的决议又由newPromise的决议决定）
  console.log("第五个then方法", res);
  return "666"
}).catch()