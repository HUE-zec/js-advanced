// finally是在ES9中新增的一个特性，表示Promise对象无论变成fulfilled还是reject状态，最终都会执行的代码

// finally方法是不接收参数的，因为前面无论是fulfilled状态还是reject状态，其都会执行

const promise = new Promise((resolve, reject) => {
  reject("reject")
})    

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log("finally");
}) 