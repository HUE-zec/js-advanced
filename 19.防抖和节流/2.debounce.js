// 参数、返回值、内部操作？

// inputE1.oninput = debounce(function () {
//   console.log(`发送网络请求，${counter++}`, this.value);
// }, 2000)

// 每次触发事件都是调用debounce函数（这个函数只是执行了一次）执行返回的_debounce函数
function debounce(fn, delay, immediate = false) { // 相当于独立函数调用，其this为全局对象
  
  let timer = null
  let isInvoke = false
  
  // 每次触发事件调用_debounce函数，通过闭包保存上一次事件触发的函数的延时操作，如果在其延时的时候有触发了相同的函数，那么就通过clearTimeout让其不执行（起到了取消上一次事件的效果）
  const _debounce = function(...args) { // 监听事件执行函数绑定的参数会给_debounce，比如我们想在fn中拿到event
      // this是事件监听的对象，_debounce会绑定监听的inputE1

      // 重新计时后，需要将上一次事件取消掉，否则就是将很多次密集事件触发的各次函数执行都延时而已
      if (timer) {
        clearTimeout(timer)
      }

      // 如果第一次操作需要立即执行
      if (immediate && !isInvoke) {
        fn.apply(this, args)
        // immediate = false 最好不要这样做
        isInvoke = true
        return
      }

      timer = setTimeout(() => { // 箭头函数，没有自己的this，向上查找
        fn.apply(this, args) // 默认不绑定的话是独立函数调用，this是全局对象
        timer = null // 状态回归，不写也没问题
        isInvoke = false
      }, delay)
  }

  // 可以让用户选择取消监听事件对应的函数执行（将要执行，用户不再触发对应的事件，但是想要自己取消对应函数执行）
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer)
  }

  // 不能直接返回原函数，应该返回一个在原函数基础上具有防抖功能的函数
  return _debounce // inputE1会绑定给debounce返回的_debounce函数
}