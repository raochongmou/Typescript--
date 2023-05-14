interface ISwim {
  swimming(): void
}
interface IEat {
  eating(): void
}

class Animal {}

// 可以实现多个接口,但是继承只能是单继承(typescript语言)
class Fish extends Animal implements IEat, ISwim {
  swimming() {
    console.log('Fish swimming');
  }
  eating() {
    console.log('Fish eating');
  }
}

// 实现接口IEat
class Person implements IEat {
  eating() {
    console.log('Person eating');
  }
}

function swimActions(animal: Fish) {
  animal.eating();
}

swimActions(new Fish());
swimActions({
  swimming: function(){
    console.log('Object Swimming');
  }, 
  eating: function(){
    console.log('Object eating');
  }
});

// 面向接口编程
// function swimActions(animal: IEat) {
//   animal.eating();
// }

// swimActions(new Fish());
// swimActions(new Person());

export{}