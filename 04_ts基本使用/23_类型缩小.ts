type Idtype = string | number;
function getId(id: Idtype) {
  if(typeof id === 'string') {
    console.log(id.toLocaleLowerCase);
  } else {
    console.log(id);
  }
}
// getId(123);
// getId('123');

type DirectType = 'left' | 'right' | 'top' | 'bottom';
function printDirection(direction: DirectType) {
  if(direction === 'bottom') {
    console.log('bottom');
  } else if(direction === 'left') {
    console.log('left');
  } else if(direction === 'right') {
    console.log('right');
  } else {
    console.log('top');
  }
  // switch写法
  switch(direction) {
    case 'left':
      console.log('left');
      break;
    case 'bottom':
      console.log('bottom');
      break;
    case 'right':
      console.log('right');
      break;
    case 'top':
      console.log('top');
      break;
  }
}
printDirection('bottom');

class Student {
  studying() {
    console.log('studying...');
  }
}
class Teacher {
  teaching() {
    console.log('teaching...');
  }
}

// instanceof范围缩小
function getInfo(p: Student | Teacher) {
  if(p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}
let s1 = new Student();
let t1 = new Teacher();
// getInfo(s1);
// getInfo(t1);

type FishType = {
  swimming: () => void
}
type DogType = {
  running: () => void
}

class Fish {
  swimming() {
    console.log('swimming');
  }
}

class Dog {
  running() {
    console.log('running');
  }
}

function getBehavior(behavior: FishType | DogType) {
  if('swimming' in behavior) {
    behavior.swimming();
  } else {
    behavior.running();
  }
}
let f1 = new Fish();
getBehavior(f1);
let d1 = new Dog();
getBehavior(d1);


export {}