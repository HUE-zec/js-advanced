// 对象的存取属性描述符：set和get
// get 获取属性时会回调的函数
// set 设置属性时会回调的函数
// 默认都是undefined

let obj = {
  name: "coder"
}

let _name = ""
console.log(obj.name)
Object.defineProperty(obj, "name", {
  set: function(value) {
    console.log("set~", value);
    _name = value
  },
  get: function () {
    console.log("get~")
    // return obj.name 这样会陷入递归的死循环，但是如果不返回值，下面console.log(obj.name)会得到undefined
    // return _name 
  }
})

// obj的name被修改的时候会调用set（即可以监听该属性设置的过程），并将设置的值传入set
obj.name = "CODER"

// 获取该属性的过程会被get监听
console.log(obj.name); // 如果get不返回值这里会得到undefined（因为如果我们重写了get，并且不给其返回值，那么其默认值就是undefined，并且如果我们只重写set，JavaScript中，对象的属性默认是带有getter和setter的，即使你没有显式地定义它们。如果你使用Object.defineProperty()方法为对象属性定义setter而不定义getter，则该属性的getter默认为undefined。这就是为什么在你没有定义getter的情况下，获取该属性的值会返回undefined的原因。

// set和get（访问器）能够精准的对某一个属性的访问过程（存取）做一个监听，一般能够做到监听，我们就可以完成响应式的代码了


/*  
  get
    属性的 getter 函数，如果没有 getter，则为 undefined。
    当访问该属性时，会调用此函数。
    执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
    该函数的返回值会被用作属性的值。 默认为 undefined。
*/

/*
  属性的 setter 函数，
  如果没有 setter，则为 undefined。
  当属性值被修改时，会调用此函数。
  该方法接受一个参数（也就是被赋予的新值），
  会传入赋值时的 this 对象。 默认为 undefined。
*/

