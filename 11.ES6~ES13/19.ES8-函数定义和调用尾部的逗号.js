// 早期JS不支持在函数定义形参列表和函数调用实参列表的尾部加,的
function foo(a, b,) {
  console.log(a, b,);
}

foo(1, 2,)