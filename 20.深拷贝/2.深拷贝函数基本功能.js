function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "function" || valueType === "object")
}

function deepCopy(originValue) {
  if (!isObject(originValue)) {
    return originValue
  }

  const newValue = Array.isArray(originValue) ? [] : {} 
  for (const key in originValue) {
    newValue[key] = deepCopy(originValue[key])
  } 

  return newValue
}

let info = {
  name: 'coder',
  age: 18,
  frineds: {
    name: 'coder'
  },
  friendsMoney: [
    100,
    200,
    300,
    400,
    500
  ]
}
let obj1 = deepCopy(info)
console.log(obj1);
obj1.frineds.name = 'CODER'
console.log(info.frineds.name); // 没有被改变
