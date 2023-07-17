/*
  Reflect也是一个ES6新增的对象，字面意思是反射
    那么这个Reflect有什么用？
      它提供了很多操作JS对象的方法，有点像Object中操作对象的方法
        比如：
          Reflect.getPropertyOf(target)类似于 Object.getPropertyOf()
          Reflect.defineProperty(target, propertyKey, attributes)类似于Object.defineProperty()
        我们有Object做这些操作，那么为什么还需要有Reflect这样新增的对象
          这是因为早期的ECMA中没有考虑这种对 对象本身 的操作如何设计会更加规范，所以把这些API放到了Object上
            但是Object作为构造函数，这些操作实际放到它身上并不合适
              另外还有一些比如in/delete的操作，会让JS看起来有点奇怪
                所以在ES6中新增了Reflect，让我们这些操作符都集中到了Reflect对象上
                  另外在使用Proxy的时候，可以做到不操作原对象
*/
let obj1 = {
  name: "coder"
}
delete obj1.name
if (obj1.name) {
  console.log("删除失败");
} else {
  console.log("删除成功");
}

// 如果使用 Reflect
// Reflect.deleteProperty()能直接返回一个Boolean类型
if (Reflect.deleteProperty(obj1, "name")) {
  console.log("删除成功");
} else {
  console.log("删除失败");
}

// 并且如果configurable: false，后者并不会报错，而前者会，后者在设计上更加规范，所以后者更好

// 如果Object.defineProperty()中定义失败会直接报错，而如果用Reflect.defineProperty()即使定义失败也不会报错，但是return一个false