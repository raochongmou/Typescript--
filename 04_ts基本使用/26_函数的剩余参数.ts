// 剩余参数的基本使用
// function sum(...nums: number[]) {
//   let total = 0;
//   for(let num of nums) {
//     total += num;
//   }
//   return console.log(total);
// }

// sum(20)
// sum(20, 30)
// sum(20, 30, 40)
// sum(20, 30, 40, 50)
// 如果有多个参数,剩余参数不能作为第一个参数接收
function sum(initNums: number,...nums: number[]) {
  // let total = 0;
  for(let num of nums) {
    initNums += num;
  }
  return console.log(initNums);
}

sum(20)
sum(20, 30)
sum(20, 30, 40)
sum(20, 30, 40, 50)