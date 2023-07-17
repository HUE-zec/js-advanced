// padStart和padEnd方法
const minute = "5".padStart(2, "0") // 第一个参数：所需位数，如果当前字符串长度小于第一个参数，则使用第二个参数进行填充
const second = "5".padStart(2, "0")
console.log(minute + ":" + second);

// 应用场景：对敏感数据进行处理
let cardNumber = "13423423242499432892"
// 最后四位之前全部用*代替
const visibleNumber = cardNumber.slice(-4)
cardNumber = visibleNumber.padStart(cardNumber.length, "*")
console.log(cardNumber);
