function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 3000)
  })
}

// 需求：发送一次网络请求，等待这次网络请求的结果，再发送第二次网络请求，再等待
// function getData() {
//   requestData("111").then(res1 => {
//     console.log(res1);
//     requestData(res1 + "222").then(res2 => {
//       console.log(res2);
//       requestData(res2 + "333").then(res3 => {
//         console.log(res3);
//       })
//     })
//   })
// }
// 回调地狱，回调函数一层层往下套回调函数

// 重构
// function getData() {
//   requestData("111").then(res1 => {
//     console.log(res1);
//     return requestData(res1 + "222")
//   })
//   .then(res2 => {
//     console.log(res2);
//     return requestData(res2 + "333")
//   })
//   .then(res3 => {
//     console.log(res3);
//   })
// }

// 再重构，生成器函数方案（函数内部更清晰，执行完上一个得到结果后再执行下一个）
// function* getData() {
//   const res1 = yield requestData("111")

//   console.log(res1);
//   const res2 = yield requestData(res1 + "222")

//   console.log(res2);
//   const res3 = yield requestData(res2 + "333")
  
//   console.log(res3);
// }

// const generator = getData()
// generator.next().value.then(res1 => { // 拿到第一个yield后面的requestData("111")，requestData("111")返回一个promise
//   generator.next(res1).value.then(res2 => { // next(res1)，res1会被传给前一个yield的const res1的res1
//     generator.next(res2).value.then(res3 => {
//       generator.next(res3)
//     })
//   })
// }) 

// 利用await/async重构，await/async其实就是生成器函数和yield的语法糖
async function getData() {
  const res1 = await requestData("111")
  console.log(res1);

  const res2 = await requestData(res1 + "222")
  console.log(res2);

  const res3 = await requestData(res2 + "333")
  console.log(res3);
}

getData()