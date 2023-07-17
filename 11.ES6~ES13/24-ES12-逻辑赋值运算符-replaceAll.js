let a = 1, b = 0
// 逻辑赋值运算符
// 1. ||逻辑赋值运算符
a ||= undefined // a = a || undefined
b ||= 1
console.log(a, b);

let c = undefined, d = null, e = 1
// 2. ??逻辑赋值运算符
c ??= 'a' // c = c ?? 'a'
d ??= 2
e ??= 2
console.log(c, d, e);

let f = NaN, g = 0, h = 'a'
// 3. &&逻辑赋值运算符
f &&= true // f = f && true
g &&= 'a'
h &&= 0
console.log(f, g, h);


// replaceAll()
let s = "0101010101"
console.log(s.replace("0", "1")); // 只能替换第一个满足条件的字符串
console.log(s.replaceAll("0", "1")) // 可以替换所有满足条件的字符串
console.log(s);
