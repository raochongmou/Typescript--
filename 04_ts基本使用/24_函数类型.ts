// 函数类型使用
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2;
} 

add(10, 20);

type CalcFnParamsType = (n1: number, n2: number) => number;

function calc(n1: number, n2: number, fn: CalcFnParamsType) {
  return fn(n1, n2);
}

const res1 = calc(10, 20, function(n1, n2) {
  return n1 + n2;
});
console.log(res1);

const res2 = calc(20, 30, function(n1, n2) {
  return n1 * n2;
})
console.log(res2);




export{}