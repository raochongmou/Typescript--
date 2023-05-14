export namespace time {
  export function formatter() {
    return "2022-02-10";
  }

  export function foo() {
    return console.log("foo");
  }

  export const name = "james";
}

export namespace money {
  export function formatter() {
    return "20.00";
  }

  export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    eating() {
      console.log('eating');
      console.log(this.name);
    }
  }
}

console.log(money.formatter());
