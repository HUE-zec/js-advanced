// setTimeout传入的回调函数（macrotask）会被放到一个宏任务队列中
setTimeout(() => {
  console.log(000);
})

console.log(111);
// new Promise()中传入的回调函数在全局执行上下文就会执行（不会被传到任务队列中），或者说是在本次事件循环中就会执行
new Promise((resolve, reject) => {
  console.log(222);
  resolve(333)
  // then中的回调函数（microtask，微任务）会进入一个微任务队列中（整个执行上下文栈为空时才会去执行）
}).then(res => {
  console.log(res);
})
console.log(444);

/*
  宏任务队列：
    ajax对应回调/setTimeout对应回调/setInterval/DOM监听/UI Renering等宏任务
  微任务队列：
    Promise的then回调/Mutation Observer API（用来监听DOM变化，用的不多）传入的回调/queueMicrotask()传入的回调等微任务

  等到执行上下文栈为空时（全局执行上下文中的代码都执行完毕），
    先执行微任务队列中的任务，
      再会执行宏任务队列中的任务
        在执行一个新的宏任务之前，都会先查看微任务队列中是否有微任务需要执行
          即执行一个宏任务前，微任务一定是会被执行完的
            （执行一个宏任务的时候，如果产生了新的微任务，还会继续执行这个宏任务，因为当前这个宏任务已经是在全局执行上下文栈中了，而不是在宏任务队列中）
*/
