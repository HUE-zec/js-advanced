function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 3000)
  })
}

function* getData() {
  const res1 = yield requestData("111")
  console.log(res1);
  const res2 = yield requestData(res1 + "222")
  console.log(res2);
  const res3 = yield requestData(res2 + "333")
  console.log(res3);
}

// const generator = getData()
// generator.next().value.then(res1 => {
//   generator.next(res1).value.then(res2 => {
//     generator.next(res2).value.then(res3 => {
//       generator.next(res3)
//     })
//   })
// })

// 可以封装一个自动化执行生成器函数的函数
function execGenFn(genFn) {
  const generator = genFn()

  function exec(res) {
    const result = generator.next(res)
    console.log(result);
    if (result.done) return;
    result.value.then(res => {
      exec(res)
    })
  }

  exec()
}

execGenFn(getData)