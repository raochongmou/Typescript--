let message: string = "我是?";

// ??表示前面变量为空时执行它后面的内容 否则执行默认值(原先的值) 相当于下面三目预算法的语法糖
const news1 = message ?? '我是??';
// 等价于
const news2 = message ? message : '我是??';
console.log(news1);
console.log(news2);


export{}