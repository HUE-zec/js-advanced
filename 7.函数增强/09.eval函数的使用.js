let message = "hello"
let codeString = `
  let name = "coder"; 
  console.log(name);
  console.log(message);
`

eval(codeString) // 将字符串作为一段代码执行，并且也可以取到全局变量

// eval会将最后一句执行语句的结果作为返回值
console.log(eval(codeString))

// 不建议在开发中使用eval函数
// 可读性差
// eval的参数是一个字符串，有可能在执行过程中被篡改，可能会造成被攻击的风险
// eval的执行必须经过js解释器，不能被js引擎优化