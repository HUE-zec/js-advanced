/*
  this指向的确定
  首先this指向一个对象
    this绑定和定义的位置没有关系
    this绑定和调用方式以及调用的位置有关系
    this是在运行时绑定的
      绑定规则：
        1.默认绑定：独立调用（不过严格模式下独立调用的函数的this指向的是undefined）
        2.隐式绑定
        3.显式绑定
        4.new绑定

  注意obj: {}的这个{}并不是作用域
*/

// ! 1.默认绑定
function foo () {
  console.log(this);
}
foo() // 全局

let obj = {
  name: 'coder',
  bar: function () {
    console.log(this);
  }
}

let baz = obj.bar
baz() // 全局

function fn1 (fn) {
  fn()
}
fn1(obj.bar) // 全局

// ! 2.隐式绑定
obj.bar() // obj所指向的对象

// ! 3.显式绑定，在函数调用的时候通过call和apply将this绑定到某个对象上
foo.call(obj) // obj所指向的对象
// 传入有包装类的基本数据类型的时候，会给其绑定对应的包装类的对象
foo.call(123)
foo.call("abc")
// undefined 和 null比较特殊
foo.call(undefined) // 全局
foo.call(null) // 全局
// apply和call用法差不多，不过apply还可以传入第二个参数（额外实参，数组形式）
function foo3 (name, age, height) {
  console.log(this, name, age, height);
}
foo3.apply("obj", ["CODER", "18", "180"])
// call也可以传入第二个参数，不过第一个参数之后的参数是以多参数的形式传递
foo3.call("obj", "CODER", 18, 180)

// ! bind函数
// 可以通过bind()方法创建一个新的绑定函数，绑定函数是一个怪异函数对象
// 在bind()被调用时，这个新函数的this被指定为bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用
// bind绑定的对象比独立调用函数的优先级更高
let bar = foo3.bind(obj, "CODER", 18)
bar() // 此时的this不是全局对象，并且上面bind传入的参数也都有包含
bar(180) // 如果bind中传了参数，那么调用时再传参，无法覆盖bind传递过的参数，而是传递给之后的参数（未被bind传值的参数，从前往后）

// ! 4.new绑定
function foo2 () {
  this.fn2 = baz
  console.log(this); // this写最前面也依旧可以正确打印
}
new foo2()

// 还有一些函数可以在调用的时候绑定this

// ! this绑定的优先级
// 1.默认绑定优先级最低
// 2.显式绑定 > 隐式绑定
// 3.new > 隐式绑定
// new不可以和apply/call一起使用，所以没有意义进行比较
// 4.new的优先级大于bind显式绑定
function foo4 () {
  console.log(this);
}
let bindFn = foo.bind("obj")
new bindFn() // this为空对象，说明new的优先级更高
// 5.bind的优先级比call/apply更高


// ! 有些规则之外的情况
// 1.在显式绑定中，传入null或undefined，这个显式绑定会被忽略，使用默认规则
// 2.间接函数引用
let objA = {
  foo: function () {
    console.log(this);  
  }
}
let objB = {};
(objB.foo = objA.foo)() // 全局

// 3.箭头函数
// 箭头函数不会绑定this/arguments属性（所以不能给其显式绑定this），不能作为构造函数来使用（因为箭头函数没有原型）
let obj5 = {
  foo5: function () {
    let bar5 = () => {
      console.log(this);
    }
    return bar5
  }
}
let fn5 = obj5.foo5()
fn5.apply("aaa") // obj5所指向的对象，因为apply无法给箭头函数绑定this，箭头函数压根就没有this，然后其会去上层作用域中找，由于foo5被obj调用，因此foo5的this指向obj

var obj6 = {
  foo6: () => {
    var bar6 = () => {
      console.log(this);
    }
    return bar6
  }
}
var fn6 = obj6.foo6()
fn6.apply("aaa") // 浏览器里是window，node里是空对象（不是global），node里为什么是这样有点复杂

let a = () => {
  console.log(this);
}
let b = () => {
  console.log(globalThis);
}
a() // {}
b() // 在node中，通过globalThis才可以在全局中拿到全局对象





let obj10 = {
  message: "I am obj4"
}
let obj10Name = "foo"
obj10[obj10Name] = function() {
  console.log(this);
}
obj10[obj10Name]() // 这样相当于是隐式绑定