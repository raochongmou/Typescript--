class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  eating() {
    console.log('person eating');
  }
}

class Student extends Person {
  stuId: string;
  constructor(stuId: string, name: string, age: number){
    super(name, age)
    this.stuId = stuId;
  }
  // 子类方法重写
  eating() {
    super.eating();
    console.log('stu eating');
  }
  studying() {
    console.log('studying');
  }
}

class Teacher extends Person {
  teachId: string;
  constructor(teachId: string, name: string, age: number) {
    super(name, age);
    this.teachId = teachId;
  }
  teaching() {
    console.log('teaching');
  }
}

const s1 = new Student("001","curry", 35);

console.log(s1.name);
console.log(s1.age);
console.log(s1.stuId);
s1.studying();
s1.eating();

export {}