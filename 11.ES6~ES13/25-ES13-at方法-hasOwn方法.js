// 之前学过 at方法判断，ES13加入
let names = ["coder", "ksdjfk", "fdksjfkds"]
console.log(names.at(0));
console.log(names.at(1));
console.log(names.at(2));
console.log(names.at(-1));

let s = "coderchao"
console.log(s.at(0));

// 对象属性判断hasOwn方法
// image.png
let obj = {
  name: "coder",
  age: 18,
  height: 1.88,
  address: "中国",
  __proto__: {
    message: "CODER"
  }
}

console.log(Object.hasOwn(obj, "name")); // true
console.log(obj.message);
// Object.hasOwn()只会查找对象本身有无这个属性
console.log(Object.hasOwn(obj, "message")); // false

// 和Object.prototype.hasOwnProperty()有什么区别

// 区别一：首先，hasOwnProperty()是一个实例方法，如果对象本身有hasOwnProperty方法，那么就优先会用对象自身的，会造成覆盖的问题

// 区别二：如果对象的原型上没有这个方法
const info = Object.create(null)
info.name = "coder"
// 直接报错
// console.log(info.hasOwnProperty("name")); 
// 不会报错
console.log(Object.hasOwn("name"));