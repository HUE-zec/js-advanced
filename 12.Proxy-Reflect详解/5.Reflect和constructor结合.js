/* 
  比如一个Student构造函数和Person构造函数，
    我们想要创建Student的实例的时候执行的是Person构造函数内部的代码
*/
function Person(name, age) {
  this.name = name
  this.age = age
}

// function Student() {}

// const stu = Reflect.construct(Person, ["coder", 18], Student)
// console.log(stu.__proto__ == Student.prototype); // true

// console.log(stu.name);
// console.log(stu.age);

function Student(name, age) {
  // 也可以像下面这样实现借用构造函数
  const _this = Reflect.construct(Person, [name, age], Student)
  return _this  
}

let stu = new Student("coder", 18)
console.log(stu.__proto__ == Student.prototype); // true
console.log(stu);