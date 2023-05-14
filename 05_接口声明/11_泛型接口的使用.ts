interface IPerson<T1 = number, T2 = string> {//默认T1类型为number, T2类型为string;
  name: T1,
  age: T2
}

const person1: IPerson<string, number> = {
  name: 'curry',
  age: 35
}
// 默认传参数就是取初始类型的值
const person2: IPerson = {
  age: 'curry',
  name: 35
}