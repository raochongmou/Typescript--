
function add(...c) {
  let num = 0;
  for(n of c) {
    num += n;
  }
  return console.log(this.a + this.b + num);
  // return console.log(this.a + this.b + c + d);
}
let obj = {
  a: 10,
  b: 20
}

add.call(obj, 30, 40);
add.apply(obj, [30, 40]);
