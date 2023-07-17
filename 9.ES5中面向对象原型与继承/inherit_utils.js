// 如果我们担心Object.create()有兼容性问题，可以自定义
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function inherit(Subtype, Supertype) {
  // Subtype.prototype = Object.create(Supertype.prototype)
  Subtype.prototype = createObject(Supertype.prototype)

  // 不过最好给子类原型添加construcotr属性
  Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable:false,
    configurable:true,
    writable:true,
    value:Subtype
  })
}