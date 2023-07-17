// catch方法也会返回一个promise的对象，因此catch方法也可以继续调用then方法或者catch方法

const promise = new Promise((resolve, reject) => {
  reject("111") // 如果这里直接就是拒绝，在链式调用中，最近的catch会被直接执行（Promise的机制，内部实现暂时不用管）
})

// promise.catch(err => {
//   console.log(err);
// })

// 1.catch方法也会返回一个新的Promise
promise.catch(err => {
  console.log(err);
}).then(res => {
  console.log(res); // 会执行，undefined
})

// 2.catch方法的执行时机
promise.then(res => {
  console.log(res); // 不会执行，因为promise没有决议，而是拒绝
}).then(res => {
  console.log(res); // 不会执行
}).catch(err => { // 会直接执行第一个拒绝
  console.log(err); // 111
})


const promise2 = new Promise((resolve, reject) => {
  resolve("成功的回调")
})
promise2.then(res => {
  console.log(res);
  /*
    在当前then能被执行的时候：
    那我们如何在此处做一个拒绝呢？
    返回某个东西可以吗？不行，这样就是在做决议了
    之前我们只学过通过return中断函数继续执行，其实也可以通过throw（throw new Error）

    then中传入的回调函数抛出的这个异常会被捕获到
      然后在返回的Promise其new Promise的时候，
        reject(new Error())
  */
  throw new Error("222")
}).catch(err => {
  console.log("失败的回调", err);
})


// 上面就是关于catch函数的执行时机，其并不是说加到哪个Promise上，其就一定会在这个Promise reject的时候执行，其会找到最先被reject的Promise，来回调对应reject中的回调函数