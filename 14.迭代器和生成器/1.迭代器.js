/*
  迭代器：
    使用户在容器对象上遍历的对象，使用该接口无需关心对象内部的实现细节
      从迭代器的定义来看，迭代器是帮助我们对某个数据结构进行遍历的对象
        在JS中，迭代器也是一个具体的对象，这个对象符合迭代器协议（iterator protocol）
          迭代器协议定了一系列值（无论是有限个还是无限个）的标准方式
            在JS中，这个标准就是一个特定的next方法

    JS中next方法有如下要求：
      1.一个无参数或者有参数的函数，
      2.返回一个应当拥有两个属性的对象
        done(Boolean)：
          如果迭代器可以产生序列中的下一个值，则为false，这等价于没有done这个属性
          如果迭代器已经将序列迭代完毕，则为true。这种情况下，value是可选的，如果它依然存在，即为迭代结束后的默认返回值
        value:返回的javascript值，没写就是undefined，done为true时可省略
*/

const names = ['abc', 'cba', 'nba']

let index = 0
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return {
        done: false,
        value: names[index ++],
      }
    } else {
      return { done: true, }
    }
  },
}
console.log(namesIterator.next().value);
console.log(namesIterator.next().value);
console.log(namesIterator.next().value);
console.log(namesIterator.next().value);

// 为数组创建一个通用的迭代器
function createArrayIterator(arr) {
  let index = 0
  return {
    next: function() {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index ++]
        }
      } else {
        return { done: true }
      }
    }
  }
}

let nums = [1, 2, 3, 4, 5]
const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
