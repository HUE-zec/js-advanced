// ES6中的rest parameter（rest参数、剩余参数）可以把函数中不定数量的参数放到一个数组中
// 如果函数的最后一个参数是以...为前缀的，那么其会将剩余的参数组成一个数组放到该参数中，

/* 
  rest参数和arguments的区别：
    rest参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参
    arguments是一个类数组对象，rest参数是一个真正的数组
    arguments是早期ES为了方便去获取所有的参数而提供的一个数据结构，rest参数是es6中提供并希望其替代arguments功能的
*/

// 剩余参数必须放到最后一个位置，否则会报错