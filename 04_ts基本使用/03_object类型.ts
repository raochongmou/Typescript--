// 不建议直接写object,默认使用自动推断
// const info: object = {
const info = {
  name: 'irving',
  age: 18,
  run() {
    return console.log('111');
  }
}
info.run();
// 死循环
/*function loopFun(): never {
  while(true) {
    console.log('123');
  }
  // return "112";永远走不到return
}
loopFun(); */