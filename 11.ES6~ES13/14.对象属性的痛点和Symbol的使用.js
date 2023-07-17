/* 
    Symbol是什么？翻译为符号
      在ES6之前，对象的属性名都是字符串，很容易造成属性名的冲突
        比如一个对象，我们希望在其中添加一个新的属性和值，
          但是我们并不确定原来有什么，很容易覆盖掉原来的某个属性
*/

// 使用Symbol可以生成一个独一无二的值
const s1 = Symbol()
const info = {name: "coder"}
const obj = {
  [info]: "hhh", // 会将对象转为字符串'[object Object]'
  [s1]: "111"
}
console.log(obj); // { '[object Object]': 'hhh', [Symbol()]: '111' }
console.log(obj[info]); // hhh
console.log(obj[s1]); // 111

const s2 = Symbol()
console.log(s1 === s2); // false

// 通常会用Symbol在对象中表示唯一的属性名


// 可以通过Symbol对之前写的apply和call做优化，防止其内部就有一个叫fn的属性
function foo(obj) {
  const sKey = Symbol()
  obj[sKey] = function() {}
  delete obj[sKey]
}