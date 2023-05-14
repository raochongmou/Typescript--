class Animal {
  action() {
    console.log('action');
  }
}

class Fish extends Animal {
  action() {
    console.log('swimming');
  }
}

class Dog extends Animal {
  action() {
    console.log('running');
  }
}

// 多态 必须有继承的子类
// 实例化的子类指向父类  但是父类执行方法时是执行的子类里面的方法
function getAction(animal: Animal[]) {
  animal.forEach(animal => {
    animal.action();
  })
}

getAction([new Dog(), new Fish()]);