// 封装一个自动柯里化函数
function getCurringFunction (fn) {
  // 两类操作：1.继续返回一个接收新参数的新函数 2.直接执行fn的函数
  function curryFn (...args) {
    if (args.length >= fn.length) {
      fn(...args) // 第二类操作
    } else {
      return function (...newArgs) { // 第一类操作
        return curryFn(...args.concat(newArgs))
      }
    }
  }

  return curryFn
}

function foo(a, b, c) {
  console.log(a, b, c);
}

let foo2 = getCurringFunction(foo)
foo2(10, 20)(30)
foo2(10)(20, 30)
foo2(10)(20)(30)
foo2(10)(20)(30, 40)

