/*
  之前的代码看着有些奇怪：
    我们获取一个数组的时候，需要自己创建一个index变量，再创建一个所谓的迭代器对象
      事实上我们可以对上面的代码进行封装，让对象变成一个可迭代对象
  
  什么是可迭代对象？
    他和迭代器是不同的概念
      当对象实现了一个iterator protocol时，其就是一个可迭代对象
        这个对象的要求就是必须实现@@iterator方法，在代码中我们使用Symbol.iterator访问该属性
    转变成可迭代对象的好处？
      可以对其进行某些迭代操作
        比如for of操作，就会调用其@@iterator方法
*/


/* 
  将infos（一个普通对象）变成一个可迭代对象
    必须在infos内部实现一个特定的函数，函数名为[Symbol.iterator]（[]包裹的属性名叫作计算属性名）
      且这个函数必须访问一个迭代器    
*/
const infos = {
  friends: ['coder1', 'coder2', 'coder3'],
  [Symbol.iterator]() {
    // [Symbol.iterator]: function() {}
    let index = 0
    return {
      // 如果infos要用this的话，要用箭头函数，因为如果用普通函数，下面iterator.next()调用，this绑定的是iterator，即return的这个对象，其并不存在frineds
      next: function () {
        if (index < infos.friends.length) {
          return {
            done: false,
            value: infos.friends[index++],
          }
        } else {
          return {
            done: true,
          }
        }
      },
    }
  },
}

const iterator = infos[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

/*
  可迭代对象必然具备下面的特点：
    必然可以通过[Symbol.iterator]拿到一个方法
      且该方法执行返回一个迭代器
*/

const arr = ['111']
// 可迭代对象（比如数组）内部默认就有对应能返回迭代器的方法
console.log(arr[Symbol.iterator])
console.log(arr[Symbol.iterator]())

// 可迭代对象可以使用for of
for (const item of infos) {
  console.log(item)
}

// 可迭代对象优化，如果是想迭代对象中的所有key-value呢？
const messages = {
  name: 'coder',
  age: 18,
  height: 1.88,
  [Symbol.iterator]() {
    let index = 0
    // let values = Object.values(this)
    // return {
    //   next() {
    //     if (index < values.length) {
    //       return {
    //         value: values[index++],
    //         done: false,
    //       }
    //     } else {
    //       return {
    //         done: true,
    //       }
    //     }
    //   },
    // }
    // let keys = Object.keys(this)
    // return {
    //   next() {
    //     if (index < keys.length) {
    //       return {
    //         value: keys[index ++],
    //         done: false
    //       }
    //     } else {
    //       return { done: true }
    //     }
    //   }
    // }
    let entries = Object.entries(this)
    return {
      next() {
        if (index < entries.length) {
          return {
            value: entries[index ++],
            done: false
          }
        } else {
          return { done: true }
        }
      }
    }
  },
}
const messagesIterator = messages[Symbol.iterator]()
console.log(messagesIterator.next())
console.log(messagesIterator.next())
console.log(messagesIterator.next())
for (const messagesItem of messages) {
  console.log(messagesItem);
}
for (const [name, value] of messages) {
  console.log(name, value);
}
