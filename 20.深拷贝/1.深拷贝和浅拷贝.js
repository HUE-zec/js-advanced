const info = {
  name: 'coder',
  age: 18,
  friend: {
    name: 'CODER'
  }
}

// 引用赋值，obj和info中存储的是同一个地址
const obj1 = info


// 浅拷贝，对于value为对象的属性数据只是拷贝了其地址，并不是给其拷贝了一个新的对象
const obj2 = {
  // 浅拷贝
  ...info
}
obj2.friend.name = 'fenda'
console.log(info.friend.name); // 也被改变了

// Object.assign(target, ...sources)只复制属性值，假如源对象是一个对象的引用，它仅仅会复制其引用值。
// 浅拷贝
obj3 = Object.assign({}, info)
obj3.friend.name = 'FENDA'
console.log(info.friend.name); // 也被改变了

// 深拷贝，数据都是重新生成一份新的
// 不过下面这种方法无法拷贝function还有key为Symbol
obj4 = JSON.parse(JSON.stringify(info))
obj4.friend.name = 'kele'
console.log(info.friend.name); //没有改变


