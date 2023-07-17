class Person {
  // 公共对象属性且是public的，也可以叫instance public fields，实例公共字段
  height = 1.88

  // 私有对象属性，ES13新增，instance private fields，实例私有字段
  #intro = "name is coder"

  // 公共类属性，static public fields：静态公共字段
  static totalCount = "1234"

  // 私有类属性，static private fields，静态私有字段
  static #maleTotalCount = "1111"

  constructor(name, age) {
    // 对象中的属性
    this.name = name
    this.age = age   
  }

  // 静态代码块，static block
  static {
    console.log("hello");
  }
}

let p1 = new Person("coder", 18)
