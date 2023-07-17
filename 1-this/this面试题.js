// !面试题一
var name = "window"
var person = {
  name: "person",
  sayName () {
    console.log(this.name);
  }
}
function sayName () {
  var sss = person.sayName;
  sss();
  person.sayName();
  (person.sayName)();
  (b = person.sayName)();
}
sayName();
// 默认绑定 
// person
// person
// undefined


// !面试题二








// 面试题4
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    },
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // 全局
person1.obj.foo1.call(person2) 
person1.obj.foo1().call(person2)

person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)
