function foo() {
  return 'abc';
}

function bar() {
  return 123;
}

let flag = false;
let res: unknown ;

if(flag) {
  res = foo();
} else {
  res = bar();
}
// 防止别人使用其他类型的数据引起数据乱象问题
// let msg: string = res;
console.log(res);
// res();
