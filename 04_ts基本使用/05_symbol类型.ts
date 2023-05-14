const name1 = Symbol('name');
const name2 = Symbol('name');
const info1 = {
  [name1]: "王小虎",
  [name2]: "张三",
  age: 35
}

console.log(info1[name2]);
