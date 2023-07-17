var obj = {
  foo: () => {
    var bar = () => {
      console.log(this);
    }

    return bar
  }
}
var fn = obj.foo()
fn.apply("aaa")

let fn1 = () => {
  console.log(this);
}
fn1()