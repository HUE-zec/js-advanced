// 首先下来解释一下Weak Reference和Strong Reference，弱引用和强引用是什么

// 从根对象看，如果一个引用是弱引用，那么GC会认为你可以拿到它，但是不能保证这个对象是永远存活的，GC认为这个对象没有强引用指向它，那么很有可能会把它回收

let obj1 = {name: "1"} // 比如obj1 -> 0x1
let obj2 = {name: "2"} // 比如obj2 -> 0x2
let obj3 = {name: "3"} // 比如obj3 -> 0x3

let arr = [obj1, obj2, obj3]
obj1 = null
obj2 = null
obj3 = null
// 此时原来obj1/obj2/obj3指向的对象（0x1/0x2/0x3中存储的对象）会被销毁吗？不会，因为arr还在引用

const set = new Set(arr)
arr = null // 此时0x1/0x2/0x3中的对象会被回收吗？答案是不会的，因为set中还在引用它们
// 但是如果这里是 const set = new WeakSet(arr)，那么0x1/0x2/0x3指向的对象就会被回收

/* 
  WeakSet和Set有什么区别？
    1.WeakSet只能存放对象
    2.WeakSet对元素的引用是弱引用，如果没有其它引用对该元素进行引用，那么该元素（对象）会被GC回收

    另外注意：WeakSet无法遍历
      因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成垃圾回收器无法对其中的元素进行正常的回收（不能正常销毁）
      所以存储到WeakSet中的对象是无法获取的

    那么WeakSet有什么用呢？
*/

// class Person {
//   running() {
//     console.log("running");
//   }
// }
// const p = new Person()
// const runFn = p.running
// runFn()
// const obj = {run: runFn}
// obj.run()
// 也就是说我们不仅能通过类实例.方法的形式调用该类的实例方法，但是如果我们只想让该实例方法通过对应的类实例来调用呢？（通过this判断）
const pWeakSet = new WeakSet()
class Person {
  constructor() {
    pWeakSet.add(this) // 创建实例对象的时候将这个this存进
  }

  running() {
    if (!pWeakSet.has(this)) { // 如果当前调用的方法绑定的this，不是某个实例对象的this
      return
    }
    console.log("running");
  }
}
let p = new Person()
// 并且此时可以直接销毁对象，如果是Set而不是WeakSet，由于Set实例里还存在对该对象的强引用，该对象无法被GC回收
p = null
