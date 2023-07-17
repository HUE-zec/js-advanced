// 如果想同时定义多个属性对应的描述符，了解
// Object.defineProperties()  在一个对象上定义多个新的属性或者修改属性，返回该对象
let obj = {
  age: 18
}

Object.defineProperties(obj, {
  name: {
    writable: true,
    value: "coder"
  },
  age: {
    get: function () {
      return this.age 
    }
  }
})

// 获取对象的属性描述符
// Object.getOwnPropertyDescriptor()
// Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(obj, "name"))
console.log(Object.getOwnPropertyDescriptors(obj));

// 禁止对象扩展新属性
Object.preventExtensions(obj) // 给对象添加新的属性会失败（在严格模式下会报错）

// 密封对象，不允许新配置和删除属性
// Object.seal()  实际就是等于Object.preventExtensions()并将现有属性的configurable设置为false
Object.seal(obj)

// 冻结对象，不允许修改现有的属性
// 相当于调用Object.seal()并设置writable:false  
Object.freeze(obj)