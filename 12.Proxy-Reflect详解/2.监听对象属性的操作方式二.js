/*
  在ES6中新增了一个Proxy类，这个类可以用于帮助我们创建一个代理
    如果我们希望监听一个对象的相关操作，那么我们可以创建一个代理对象
      之后对该对象的所有操作都通过该代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作

  我们可以将之前的案例用Proxy实现一次，首先我们需要new Proxy对象，
    并且传入一个需要侦听的对象以及一个处理的对象，可以称之为handler
      const p = new Proxy(target, handler)
        之后我们所有的操作都直接对Proxy操作，而不是原有的对象，因为我们需要在handler里进行侦听
*/

let obj = {
  name: "coder",
  age: 18,
}

// const objProxy = new Proxy(obj, {})

// 对obj的所有操作，操作objProxy即可
// objProxy.name = "CODER"
// console.log(obj.name);

/* 
  如果我们想要侦听某些具体的操作，可以在handler中添加对应的trap（捕获器）
    如果我们想要监听getter和setter，那么添加对应getter和setter的捕获器即可
    set函数有四个参数
      target：目标对象
      property：将被设置的属性key
      value：新属性值
      receiver：调用的代理对象
    get函数有三个参数：
      target：目标对象
      property：被获取的属性key
      receiver：调用的代理对象
*/

let objProxy = new Proxy(obj, {
  get: function(target, key) {
    console.log(`${key}被获取了`);
    return target[key]
  },
  set: function(target, key, newValue) {
    console.log(`${key}被设置为${newValue}`);
    target[key] = newValue
  },

  // 其他一些捕获器，比如监听删除（delete操作符）的捕获器
  deleteProperty: function(target, key) {
    console.log(`${key}被删除了`);
  },

  // 监听in操作符的捕获器
  has: function(target, key) {
    console.log(`使用了in判断${key}是否存在`)
    return key in target // 记得return
  }
})

objProxy.name = "CODER"
console.log(objProxy.name);
console.log(obj.name);
// 新增属性，也可以监听，不像之前Object.defineProperty()必须要对某个属性进行设置之后才可以监听到
objProxy.address = "中国"
delete objProxy.address
console.log("name" in objProxy);


// 如果我们想要监听一个函数对象呢？
function foo(num1, num2) {
  console.log(this, num1, num2);
}

const fooProxy = new Proxy(foo, {
  apply: function(target, thisArg, otherArgs) {
    console.log(`${target}应用了apply`);
    target.apply(thisArg, otherArgs)
  },
  construct: function(target, argsArray, newTarget) {
    console.log(`监听到了new操作符，通过new新建了一个对象`);
    return new target(...argsArray)
  }
})

// 对foo的代理对象进行操作
let foo1 = new fooProxy(111, 222)
fooProxy.apply("abc", [111, 222])