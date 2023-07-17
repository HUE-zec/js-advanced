"use strict"


// 1.不会意外创建全局变量
function foo () {
  message = "hello"
}
foo()
console.log(message); // 如果开启严格模式，这里是找不到message的

// 2.会引起静默失败的赋值操作抛出异常（可以发现静默错误）
let obj = {
  name: "coder"
}
Object.defineProperty(obj, "name", {
  writable: false,
  configurable: false
})
// 开启严格模式后下面的代码会报错
obj.name = "CODER" // 在默认模式下，虽然不会被修改成功，但是上面已经设置了writale:false，其不可修改，在这里对其做修改最好应该是要报错的
delete obj.name // 默认模式下，虽然不会被删除（设置了configurable:false）但也不会报错

// 3.严格模式下，函数参数名称不能相同

// 4.数字不能以0开头（0开头的数字在默认模式下会被当成八进制）

// 5.eval函数不再为上层引用变量
eval(`let message = "message"`)
console.log(message);

// 6.this不会转成对象类型
function foo () {
  console.log(this);
}
foo.apply("abc")
foo.apply(123)
foo.apply(undefined)
foo.apply(null)

// 7.默认模式下，独立函数默认调用绑定全局对象，严格模式下不绑定


