function* foo() {
  console.log(111);
  // next返回的对象的value属性，且done: false
  yield "aaa" 

  // 通过next()拿到的value的值为该返回值，且done: true
  return "我是中间插入的一个return" 

  // 由于上面使用了return，下面这些不会再被执行
  console.log(222);
  yield "bbb" // next返回的对象的value属性，且done: false
}

const generator = foo()
// 111
// { value: 'aaa', done: false }
console.log(generator.next()); 
console.log(generator.next()); // { value: '我是中间插入的一个return', done: true }
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }

// 如何接收通过next传入的参数？
// 在调用next函数的时候，可以给其传入参数，这个参数会作为上一个yield的返回值
function* bar(message) {
  console.log(message);
  // 如下在第一个yield处，可以接收到第二次next()传入的参数
  const info = yield "第一个yield"
  console.log(info);
  const info2 = yield "第二个yield"
  console.log(info2);
}

const barGenerator = bar("参数1")
/* 第一次next()如果想要给生成器内部传入参数，
    通常是直接在生成器函数的参数列表处传入 */
console.log(barGenerator.next("参数aaa")); // 第一次next()传入的参数没有用
// 第二次及之后通常是在前一个yield处拿到
console.log(barGenerator.next("参数2"));
console.log(barGenerator.next("参数3")); // 代码后续没有yield，因此done: true