// arguments是一个类数组对象，接收函数实参个数
// 类数组对象（key为0,1,2,3,4....），因此其可以拥有数组的一些特性，比如length，比如可以通过index访问
// 但是其不能使用数组的方法，如fliter,map等

function foo () {
  // 将arguments转换为数组
  // 方式一： for循环
  let newArguments = []
  for (let arg of arguments) {
    newArguments.push(arg)
  }
  console.log(newArguments);

  // 方式二：通过扩展运算符（ES6）
  newArguments = [...arguments]
  console.log(newArguments)

  // 方式三：通过slice()
  // 通过[]取到slice，再通过apply将slice()中的this绑定为arguments
  newArguments = [].slice.apply(arguments)
  console.log(newArguments);

  // 方式四：Array.from（ES6）
  newArguments = Array.from(arguments)
  console.log(newArguments);
}

foo(1, 2, 3, 4)

// 箭头函数的arguments
// 箭头函数不绑定arguments（没有自己的arguments），只能顺着作用域链找
var bar = (a, b) => {
  console.log(arguments);
}
bar(1, 2)