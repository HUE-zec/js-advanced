class Person {
  constructor(name, age, height, friends) {
    this.name = name
    this.age = age
    this.height = height 
    this.friends = friends
  }

  // 实例方法
  [Symbol.iterator]() {
    let index = 0
    const iterator = {
      next: () => {
        // 自定义迭代的内容
        if (index < this.friends.length) {
          return { done: false, value: this.friends[index ++]}
        } else {
          return { done: true }
        }
      },
      // 可以通过return方法来监听迭代器的中断
      return: () => {
        console.log("监听到迭代器被中断了");
        return { done: true } // 不返回一个对象会报错
      }
    }
    return iterator
  }

}

let p1 = new Person("coder", 18, 1.88, ["1", "2", "3", "4", "5"])
for (const friend of p1) {
  console.log(friend);
  /*
    迭代器会在某些没有完全迭代的情况下被中断
      比如遍历的过程中通过break/return/throw中断了循环操作，或者是结构的时候没有结构所有值
  */
  if (friend === "4") {
    break;
  }
}