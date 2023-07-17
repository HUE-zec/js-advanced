class Person {
  constructor(name, age, height, friends) {
    this.name = name
    this.age = age
    this.height = height
    this.friends = friends
  }

  *[Symbol.iterator]() {
    yield* this.friends
  }
}

let p1 = new Person("coder", 18, 1.88, ["111", "222", "333"])
for (let friend of p1) {
  console.log(friend);
}

const personFriendsIterator = p1[Symbol.iterator]()
console.log(personFriendsIterator.next());
console.log(personFriendsIterator.next());
console.log(personFriendsIterator.next());