class Person {
  private name: string = "张三";

  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p1 = new Person();
// private定义的属性只能在类的内部被访问
// console.log(p1.name);
// 可以通过类中的方法返回值来访问private定义的属性
console.log(p1.getName());
// 修改类的内部属性值
p1.setName('curry');
console.log(p1.getName());

export{}