/*
    展开语法：
        可以在函数调用、数组构造时，将数组表达式或string在语法层面展开
        还可以在构造对象字面量时，将对象表达式按key-value的形式展开

    展开语法的使用场景：
        在函数调用的时候使用
        在数组构造时使用
        在构建对象字面量时使用（ES2018（ES9）新增）
*/

const names = ["123", "234", "345"]
const s = "coder"
function foo(name1, name2, name3, ...args) {
    console.log(name1, name2, name3, args);
}
foo(...names)
foo(...s)

const obj = {
    name: "coder",
    age: 18
}
// 会报错，这是为什么？
// foo(...obj) 
// 使用展开运算符调用函数的参数必须是可迭代的，而对象默认是不可迭代的

// es9新特性，在通过构建对象字面量创建对象的时候可以对另一个对象使用扩展运算符添加至该对象中（浅拷贝）
let info = {
    ...obj, // 这个跟之前的迭代是不一样的，这个是自己在内部依次获取的
    address: "中国"
}
console.log(info);