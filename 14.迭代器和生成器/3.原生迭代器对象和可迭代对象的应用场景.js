// 我们平常创建的很多原生对象都已经实现了可迭代协议，会生成一个可迭代对象，比如：String/Array/Map/Set/arguments对象/NodeList集合

/*
  可迭代对象的应用场景
    JS语法：for...of  展开语法（Spread Syntax） yield*  解构赋值
    创建一些对象时：new Map([iterator])/new WeakMap([iterator])/new Set([iterator])/new WeakSet[iterator]
    一些方法的调用：Promise.all([iterator])/Promise.race([iterator])/Array.from([iterator]) 
*/