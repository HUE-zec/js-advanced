function foo() {
  console.log(this);
}

let obj = {
  name: "coder"
}

obj[Symbol] = foo
obj[Symbol]()



computed(() => {
  count.value * 2
  // return undefined
})

computed(() => count.value * 2)
// 相当于
computed(() => {
  return count.value * 2
})