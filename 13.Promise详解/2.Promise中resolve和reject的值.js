// const p = new Promise((resolve, reject) => {
//   resolve("成功")
// })

const promise = new Promise((resolve, reject) => {
  // 1.非Promise对象
  // resolve(["coder", "CODER"])
  // resolve({name: "coder", age: 18}) // 这里不会执行，因为状态已经锁定了

  // 2.如果resolve中传入的是一个promise对象，那么当前promise对象的状态会由传入的这个promise对象的状态决定
  // resolve(p)

  // 3.如果传入一个有then方法的对象，那么会执行then方法，并且根据then方法的结果来决定Promise的状态
  // resolve({
  //   name: "coder",
  //   then: function(resolve) {
  //     resolve("111")
  //   }
  // })


  reject("失败的回调")
})

// 下面三次then都会执行，因为状态已经确定是fulfilled了，因此下面每个promise.then中传入的回调函数都会执行
// promise.then((res) => {
//   console.log(res);
// })

// promise.then((res) => {
//   console.log(res);
// })

// promise.then((res) => {
//   console.log(res);
// })

// promise.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })
// 上面的代码也可以写成如下，即then方法中传入的回调函数可以传入两个参数
// promise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })


promise.then((res) => {
  console.log(res);
}).catch((err) => { // 如果这里不做失败的回调，那么上面的失败状态是无法在此处被监听到的，会报错，也就是在reject的时候，下面的promise.then方法必须也要有catch方法
  console.log(err);
})

// 如果只有下面的这些promise.catch((err) => {console.log(err)})，那么是会报错的，如果加上了上面的代码则不会
// 下面的每个promise.catch()都会执行
// 一般来说就只会向上面那样一个promise同时写then和catch，而很少写这种只有then或者只有catch的
promise.catch((err) => {
  console.log(err);
})

promise.catch((err) => {
  console.log(err);
})

promise.catch((err) => {
  console.log(err);
})

promise.catch((err) => {
  console.log(err);
})