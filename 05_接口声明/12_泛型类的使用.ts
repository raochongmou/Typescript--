class Person<T> {
 x: T;
 y: T;
 z: T;
 constructor(x: T, y: T, z: T) {
   this.x = x;
   this.y = y;
   this.z = z;
 }
}

const p1 = new Person('1.1.2', '1.1.3', '1.0.6');

const p2: Person<number> = new Person(1, 2, 3);

// 与内置数组Array类型定义类似用法
const arr: Array<number> = [0, 1, 2];