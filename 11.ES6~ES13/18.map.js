/* 
  Map是用来存储映射关系的
    对象存储映射关系只能用字符串和Symbol（ES6新增）作为key（属性名）
      如果想要用对象作为key，那么其会自动转为字符串"[object Object]"
        而map可以直接将对象作为key（准确来说map可以接受任何数据类型作为key）
*/

// 常见的属性和方法和set类似

/*
  同理，也有WeakMap
    1.WeakMap的key只能使用对象
    2.WeakMap的key对对象的引用是弱引用，如果没有其他引用引用这个对象，GC可以回收

    WeakMap常见的四个方法：set(key, value)  get(key)  has(key)  delete(key)

    注意：WeakMap也是不能遍历的，没有forEach方法，也不支持通过for of的方式进行遍历

    WeakMap的作用？后续专门讲解。
*/
