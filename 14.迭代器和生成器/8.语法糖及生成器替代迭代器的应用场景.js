let nums = [1, 2, 3, 4, 5]

// 将之前写的创建一个数组的迭代器的函数代码改写一下
function* createArrayIterator(arr) {
  // for (let i = 0; i < arr.length; i ++) {
  //   yield arr[i]
  // }

  // 这里可以使用语法糖替代
  // 可以通过yield* 来产生一个可迭代对象，每次调用生成器对象的next时，会依次迭代这个yield*后面的可迭代对象，每次迭代其中的一个值
  yield* arr
}

const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

// 生成器函数可以按顺序生成某个范围的值
function* createRangeGenerator(start, end) {
  for (let i = start; i < end; i ++) {
    yield i
  }
}
const rangeGenerator = createRangeGenerator(1, 9)
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());
console.log(rangeGenerator.next());