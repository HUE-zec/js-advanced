// Object.defineProperty()方法会直接在一个对象上定义一个新属性，或修改一个对象的现有属性，并返回该对象

/* 
  数据属性描述符有下个特性：
    1.configurable
*/

let obj = {
  name: "coder"
}

/* 1.configurable
    表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
      当我们直接在一个对象上定义某个属性，属性的configurable默认是true
      当我们通过属性描述符定义某个属性时，属性的configurable默认是false
*/
Object.defineProperty(obj, "name", {
  configurable: false // obj的name不能再被删除（对其作删除操作无法成功，但是不会报错，严格模式下才会报错）
  // 并且不能再通过defineProperty对obj的name做修改，否则会报错
})
// 由于上面设置了configurable:false，下面这段代码就会报错
// Object.defineProperty(obj, "name", {
//   enumerable: false,
// })

/*
  2.enumerable
    表示属性是否可以通过for-in或者Object.keys()返回（若enumerable:false不可枚举则不可以通过这几种方式得到）
    当我们直接在一个对象上定义某个属性，属性的enumerable默认是true
    当我们通过属性描述符定义某个属性时，属性的enumerable默认是false
*/

/*
  3.writable
    表示是否可以修改该属性的值
    当我们直接在一个对象上定义某个属性，属性的writable默认是true
    当我们通过属性描述符定义某个属性时，属性的writable默认是false
*/

/*
  4.value
    属性的值，读取属性时会返回该值，修改属性是会对其进行修改
      默认是undefined
*/