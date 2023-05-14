class Person {
  protected name: string = '王五';
  // private name: string = '王五';
  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

class Student extends Person {
  name: string = 'curry';
  getParentName() {
    return this.name;
  }
}

const s1 = new Student();
console.log(s1.getParentName());

s1.setName('张三丰');

console.log(s1.getName());


export {}