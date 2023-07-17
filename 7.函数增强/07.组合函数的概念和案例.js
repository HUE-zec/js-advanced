// 将两个函数组合在一起生成一个新的函数

// 组合函数的工具封装
// 传入多个函数，然后自动将多个函数组合在一起依次调用
function double (num) {
  return num * 2
}
function pow (num) {
  return  num ** 2
}

function composeFn (...fns) {
  let length = fns.length
  for (let i = 0; i < length; i++) {
    let fn = fns[i]
    if (typeof fn !== "function") {
      throw new Errow(`index position ${i} must be function`)
    }
  }

  return function (...args) {
    let result = fns[0].apply(this, args)
    for (let i = 1; i < length; i++) {
      let fn = fns[i]
      result = fn.apply(this, [result])
    }

    return result;
  }
}

let foo = composeFn(double, pow)
console.log(foo(100));

let foo2 = composeFn(double, pow, console.log)
foo2(100)