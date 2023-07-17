// 可以通过对生成器对象调用return方法或者抛出异常，中断生成器函数的执行
function* foo() {
  console.log(111);
  yield "aaa"
  console.log(222);
  yield "bbb"
  console.log(333);
}

const generator = foo() // 生成器函数返回一个生成器对象

// 111
// { value: 'aaa', done: false }
console.log(generator.next());

// { value: undefined, done: true }
console.log(generator.return()); // 相当于立即结束

// console.log(generator.throw(new Error("抛出异常"))); // 每层都没有捕获会直接报错（异常会被一层层地查找是否有被捕获，一直到全局，如果没有被捕获，就会报错）

// { value: undefined, done: true }
console.log(generator.next());
