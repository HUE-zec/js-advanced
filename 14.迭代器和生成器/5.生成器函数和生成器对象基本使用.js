/*
  什么是生成器？
    生成器是ES6新增的一种函数控制、使用的方案，它让我们更加灵活地控制函数什么时候继续执行、暂停执行等
      平时我们编写的很多函数通常是在return或者发生异常的时候才终止执行的

    生成器也是一个函数，但是和普通函数有区别
      1.首先，生成器需要在函数后面加一个符号*
      2.生成器函数需要通过yield关键字来控制函数的执行流程
      3.生成器函数的返回值是一个Generator
        生成器其实是一种特殊的迭代器

      调用生成器函数只会返回一个生成器对象
        要想执行函数内部的操作，需要生成器对象，调用其next方法
*/

function* foo() { // 或者function *foo() {}
  console.log(111);
  console.log(222);
  yield console.log("aaa"); // 每次next()会执行到一个yield关键字或其整个语句处，yield后面会作为next返回的对象中value的值
  console.log(333);
  console.log(444);
  console.log("bbb"); yield
  console.log(555);
}
const generator = foo()
// 因为上面console.log("aaa")就是一个函数，返回undefined，相当于console.log("aaa"); yield undefined的效果
console.log(generator.next()) // { value: undefined, done: false }
generator.next()