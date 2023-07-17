/*
  柯里化也是函数式编程里面非常重要的一个概念
    是一种关于函数的高阶技术
      不仅用于js还被用于其他编程语言

    维基百科的解释：
      是把接收多个参数的函数，
        变成接收一个单一参数（最初函数的第一个参数），
          并返回接收余下的参数，
            而且返回结果的新函数的技术
              柯里化声称：如果你固定某些参数，你将得到接收余下参数的一个函数

    维基百科的解释有点抽象，简而言之就是：
      只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数
    
    柯里化是一种函数的转换，如将一个函数从可调用的f(a, b, c)转换为f(a)(b)(c)
      柯里化不会调用函数，它只是对函数进行转换
*/
function bar(a, b, c) {
  console.log(a, b, c);
}
bar(10, 20, 30)
// bar(10)(20)(30) bar(10)返回undefined，之后对undefined做调用会报错

// 对bar做柯里化
function foo (a) {
  return function (b) {
    return function (c) {
      console.log(a, b, c)
    }
  }
}
foo(10)(20)(30)

// 柯里化为箭头函数的形式
let foo2 = a => {
  return b => {
    return c => console.log(a, b, c)
  }
}
// 可以再精简
let foo3 = a => b => c => console.log(a, b, c);

// 函数柯里化的优势：职责单一和参数复用