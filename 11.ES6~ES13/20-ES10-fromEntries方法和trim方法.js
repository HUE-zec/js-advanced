const obj = {
  name: "coder",
  age: 18,
  address: "中国"
}

console.log(Object.entries(obj)); // [ [ 'name', 'coder' ], [ 'age', 18 ], [ 'address', '中国' ] ]

const entries = Object.entries(obj)

const obj2 = Object.fromEntries(entries)
console.log(obj2); // { name: 'coder', age: 18, address: '中国' }

// 应用
const searchString = "?name=coder&age=18&height=1.8"
const params = new URLSearchParams(searchString)
console.log(params); // URLSearchParams { 'name' => 'coder', 'age' => '18', 'height' => '1.8' }
console.log(params.get("name"));
console.log(params.entries()) // URLSearchParams Iterator { [ 'name', 'coder' ], [ 'age', '18' ], [ 'height', '1.8' ] }
for (const item of params.entries()) {
  console.log(item);
}

const paramsObj = Object.fromEntries(params.entries())


// trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。此上下文中的空格是指所有的空白字符（空格、tab、不换行空格等）以及所有行终止符字符（如 LF、CR 等）。
const s1 = "   kdfjskf   "
console.log(s1.trim());