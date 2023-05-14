class Person {
  name: string = 'james';
  age: number = 33;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  eating() {
    console.log('eating');
  }
}

const p1 = new Person('curry', 35);
console.log(p1.name);
console.log(p1.age);
p1.eating();

// 类属性的初始化赋值
class Persons {
  name: string = 'james';
  age: number = 33;
  eating() {
    console.log('eating');
  }
}
const p2 = new Persons();
console.log(p2.age);
console.log(p2.name);
p2.eating();


export {}