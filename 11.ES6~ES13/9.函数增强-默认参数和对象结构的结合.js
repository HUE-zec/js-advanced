// 解构回顾
let obj1 = {name: "coder"}
let {name = "CODER", age = 18} = obj1
console.log(name, age);

// 函数的默认参数是一个对象
function foo(obj = {name: "coder", age: 18}) {
    console.log(obj.name, obj.age);
}

// 可以直接在函数参数中做解构设置默认参数
function baz({name, age} = {name: "coder", age: 18}) {
    console.log(name, age);
}
baz({name: "CODER", age: 21})

// 最后可以写成这样
function bar({name = "coder", age = 18} = {}) { // 注意：={}不能不写，不然无法通过解构获取name和age
    console.log(name, age);
}
bar({name: "CODER", age: 21})
bar()


