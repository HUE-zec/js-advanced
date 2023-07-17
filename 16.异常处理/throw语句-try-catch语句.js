/*
  throw语句
    用于抛出一个用户自定义的异常
      当遇到throw语句时，当前函数的执行会被暂停（throw后面的语句不会被执行）
*/

function foo() {
    // throw "error" // 抛出一个字符串
    // throw {message: "I am a error"} // 抛出一个对象
    throw new Error("error") // 会把错误函数的调用栈和位置信息都给出
    /*
      JS提供了一个Error类，我们可以直接创建Error类的对象，Error类包含三个属性：
        1.message：创建Error对象时传入的message
        2.name：Error的名称，通常和类的名称一致
        3.stack：整个Error的错误信息，包括函数的调用栈，当我们直接打印Error对象时，打印的就是stack

        Error有一些自己的子类：
          RangeError：下标值越界时使用的错误类型
          SyntaxError：解析语法错误时使用的错误类型
          TypeError：出现类型错误时，使用的错误类型
    */
}

// foo()

function test() {
  // 如果我们不希望程序直接抛出异常，而是希望可以正确处理异常，就可以使用try-catch语句
  try {
    foo()
  } catch(e) {
    console.log(e);
    console.log(e.message, e.name, e.stack);
  }
  // 如果代码自己捕获了异常，那么异常就不会传递给浏览器，后续的代码就可以继续执行
  console.log("test");
}

test()
