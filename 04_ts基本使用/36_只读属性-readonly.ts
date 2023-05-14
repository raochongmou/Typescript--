class Person {
  readonly name: string ;
  age: number;
  readonly friend?: Person;
  constructor(name: string, age: number, friend?: Person) {
    this.name = name;
    this.age = age;
    this.friend = friend;
  }
}

const p1 = new Person('why', 12, new Person('curry', 35, new Person('jamse', 45)));
// console.log(p1.friend);

if(p1.friend) {
  p1.friend.age = 15;
}
console.log(p1.friend);
export{}