// 函数重载类型声明
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
function add(num1: boolean, num2: boolean): boolean;

// 函数重载具体实现
function add(num1: any, num2: any): any {
  return console.log(num1 + num2);
}

// 函数重载调用
// add(20, 30);
// add('20', '30');
// add(true, false)

// 函数的联合类型写法
// function getLength(len: string | number []): number {
//   return len.length;
// }

// const res1 = getLength('abccba');
// const res2 = getLength([1,2,3,4,5,6,7,8]);

// console.log(res1);
// console.log(res2);

// 函数重载写法
function getLength(len: string): number ;
function getLength(len: number []): number ;

function getLength(len: any): number {
  return len.length;
}

const res1 = getLength('12345678');
const res2 = getLength([10,20,30,41,100]);

console.log(res1);
console.log(res2);