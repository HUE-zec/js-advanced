const userName = "coder"
const userAge = 18
let message = `user name is ${userName}, user age is ${userAge}`
console.log(message);

// ${}中也可以写表达式
function foo() {
    return "hhh"
}

console.log(`message is ${foo()}`);

// ``也可以用来调用函数
function baz(...args) {
    console.log(args);
}
baz`hhh` // 相当于baz(["hhh"])
/*
    模板字符串中${}中的内容会被自动抽取出来到成为下个参数，
        其余字符串会在第一个数组中，
            数组中的每个元素是根据${}进行截断生成的（被变量拆分的各个字符串组合的数组）
                
*/
baz`${userAge}`
baz`hhh${foo()}`
// [ [ 'user name is ', ', user age is ', '' ], 'coder', 18 ]
baz`user name is ${userName}, user age is ${userAge}`