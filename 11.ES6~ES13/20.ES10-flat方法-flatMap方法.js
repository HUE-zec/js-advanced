let arr = [1, 2, 3, [3, 5, 6], [[4, 9], [10, 11]]]
console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));

// flatMap() 先进行map操作，再进行深度为1的flat操作
let messages = [
  "111 222 333",
  "444 555 666",
  "777 888 999"
]
const newMessages = messages.map(item => item.split(' '))
// [
//   [ '111', '222', '333' ],
//   [ '444', '555', '666' ],
//   [ '777', '888', '999' ]
// ]
console.log(newMessages);
console.log(newMessages.flat(1)); // ['111', '222', '333', '444', '555', '666', '777', '888', '999']
// 可以把上述操作合并为一个flatMap方法
console.log(messages.flatMap(item => item.split(" ")));