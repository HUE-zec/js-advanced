console.log(Number.MAX_SAFE_INTEGER);
const num1 = 11111111234243223423n
console.log(num1);


const result1 = "" || "默认值"
console.log(result1); // 默认值
const result2 = "" ?? "默认值"
console.log(result2); // 空字符串
const result3 = 0 || "默认值"
console.log(result3); // 默认值
const result4 = 0 ?? "默认值"
console.log(result4); // 0

// 空值合并运算符（??）是一个逻辑运算符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。