class Animal {
  action() {
    console.log("action");
  }
}
class Dog {
  action() {
    console.log("running");
  }
}
class Fish {
  action() {
    console.log("swiming");
  }
}
// 多态的实现
function createAnimals(animals) {
  animals.forEach((animal) => {
    console.log(animal.action());
  });
}

createAnimals([new Dog(), new Fish()]);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const info = {
    // name:'coderwho',
//     age:18,
//     friend: {
//         name: "kobe"
//     }
// }

// console.log(info.name);
// function add(num1, num2)