class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // getter/setter访问器
  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const p1 = new Person('curry');
p1.name = '詹姆斯';
console.log(p1.name);


export{}