class Person {
  name: string = '';
  age: number = 0;

  eating() {
    console.log('eating');
  }
}

class Student extends Person {
  stuId: string = '001';

  studying() {
    console.log('studying');
  }
}

class Teacher extends Person {
  teachId: string = '110';

  teaching() {
    console.log('teaching');
  }
}

const p1 = new Student();

console.log(p1.name);
console.log(p1.age);
console.log(p1.stuId);
p1.studying();

export {}