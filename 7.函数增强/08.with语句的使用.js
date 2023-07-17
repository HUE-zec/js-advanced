// with语句扩展一个语句的作用域链

let obj = {
  name: "coder",
  age:21
}


// 可以解决此时在全局直接通过name和age找到obj中的name和age
with (obj) {
  console.log(name);
  console.log(age);
}

// 不建议使用，因为其可能是混淆和兼容性问题的来源