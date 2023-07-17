// 目前没有通过字面量创建set的方式

// 通过Set构造函数创建
const set = new Set()

// set数据结构中value即是key，且set中的元素是唯一的

// 通过add方法添加数据
set.add("coder1")
set.add("coder2")
let obj = {name: "coder"}
set.add(obj)
set.add({name: "coder"}) // 和obj指向的对象是不同的
set.add({})
console.log(set);

// 应用场景：数组的去重
const names = ["1", "2", "3", "3", "4", "5", "5"]
// 常规方法
const newNames = []
for (const item of names) {
  if (!newNames.includes(item)) {
    newNames.push(item)
  }
}
console.log(newNames);
// 使用set
const nameSet = new Set(names) // 可以直接传入一个数组
console.log(nameSet);
// set再转数组
const nameArray = Array.from(nameSet)
console.log(nameArray);

// set常用的属性
// size
console.log(nameSet.size);

// 常用的方法
console.log(nameSet.add("6")); // 添加元素，返回set对象本身
console.log(nameSet.delete("6")); // 移除值为 value 的元素，并返回一个布尔值来表示是否移除成功。
console.log(nameSet.has("1")); // 返回一个布尔值，表示该值在 Set 中存在与否。
nameSet.forEach(item => console.log(item)) // forEach(callback[, thisArg])，按照插入顺序，为 Set 对象中的每一个值调用一次 callBackFn。如果提供了thisArg参数，回调中的 this 会是这个参数。
for (const item of nameSet) { // 可迭代
  console.log(item);
}

nameSet.clear() // 移除Set对象内的所有元素。
console.log(nameSet);