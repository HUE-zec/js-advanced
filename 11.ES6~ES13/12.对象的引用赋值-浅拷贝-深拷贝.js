const obj = {
    name: "coder",
    friend: {
        name: "frined"
    }
}
const info = obj // 引用赋值，赋值过去的是obj指向的对象的地址（因为obj中保存的就是对象的地址）

// 浅拷贝，之前的展开运算符其实就是一种浅拷贝
const info2 = {
    ...obj
}
info2.name = "CODER"
console.log(obj.name); // obj.name没有改变，因为info2和obj中各自有一个值为原始类型的name
info2.friend.name = "FRINED"
console.log(obj.friend.name); // obj的friend.name也被修改了，这是为什么？因为obj和info2中的friend中存的都是相同的地址值，指向同一个对象，这和基本类型是不一样的
// 这也就是浅拷贝，其只是拷贝对象浅层次的值，对于深层次的值其实并没有拷贝过来，存储的是引用（地址），只是把引用值拷贝了过去，而不会把引用的对象再拷贝一次

// 利用现有的js机制实现深拷贝
const info3 = JSON.parse(JSON.stringify(obj))
info3.friend.name = "hhh"
console.log(obj.friend.name); // 这时不会被改变

