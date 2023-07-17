/*
  async函数的一个特殊之处就是内部可以使用await关键字，而不同函数是不可以的
    await后面通常会跟上一个会返回一个Promise的表达式
      那么await会等到Promise的状态变成fulfilled，再继续执行异步函数
        如果Promise状态为rejected，其异常会通过异步函数返回值抛出，我们需要通过catch接收
*/
async function foo() {
  const res1 = await new Promise((resolve, reject) => resolve("resolve"))
  console.log(res1);
  const res2 = await new Promise((resolve, reject) => reject("reject"))
  console.log(res2);
}

foo().catch(err => console.log(err))