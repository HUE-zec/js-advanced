let obj = {
  name: 'coder',
  age: 18,
}

const keys = Object.keys(obj)
for (const key of keys) {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      console.log(key, ',', value, '被修改了')
      value = newValue
    },
    get: function () {
      console.log(key, ',', value, '被获取了')
      return value
    },
  })
}

obj.name = "CODER"
console.log(obj.name)
// 也就是说可以通过属性描述符中的存取描述属性符来做到对对象中的属性设置和获取行为的监听

/*
  但是这样有什么缺点呢？
    ECMA最初设计的时候并不是把这个API用作监听
    我们在定义某些属性的时候，初衷是定义某些普通的属性，但是后来我们强行把它做成了存取属性描述符
    其实如果我们想做一些别的操作的监听，比如新增属性和删除属性的监听，是做不到的
*/