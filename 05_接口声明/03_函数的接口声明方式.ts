// type CalcFn = (num1: number, num2: number) => number
interface CalcFn {
  (num1: number, num2: number): number
}

function sum(n1: number, n2: number, calcFn: CalcFn): any {
  return calcFn(n1, n2);
}

const add = function(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(20, 30, add));

export{}