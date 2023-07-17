const s1 = Symbol()
const s2 = Symbol()
const obj = {
    [s1]: "111",
    [s2]: "222"
}

console.log(Object.keys(obj)); // 获取不到为symbol的key
// 对key为symbol的属性进行遍历
console.log(Object.getOwnPropertySymbols(obj));
const symbolKeys = Object.getOwnPropertySymbols(obj)
for (let symbolKey of symbolKeys) {
    console.log(obj[symbolKey]);
}


// 相同值的Symbol
// 之前说过，Symbol的值是独一无二的，如果我们想创建相同的Symbol要怎么样呢？
// 可以通过Symbol.for方法做到，并且可以通过Symbol.keyFor方法来获取对应的key

const s3 = Symbol("aaa") // Symbol在创建的时候可以添加描述（description），也可以说是Symbol的key
console.log(s3.description); // aaa
// 通过Symbol函数生成的值都是独一无二的，但是通过Symbol.for和相同描述创建出来的Symbol，可以实现相同
const s4 = Symbol.for(s3.description)
const s5 = Symbol.for(s4.description)
const s6 = Symbol.for("aaa")
console.log(s3 === s4); // false
console.log(s5 === s4); // true
console.log(s6 === s4); // true

console.log(Symbol.keyFor(s4));