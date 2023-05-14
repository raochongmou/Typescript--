type Methods = 'GET' | 'POST';

function request(url: string, method: Methods) {
  console.log(url);
  console.log(method);
}

// 1.使用(as const)避免修改options内部属性值
// let options = {
//   url: 'https://www.baidu.com/',
//   method: 'GET'
// } as const
// options.url = 'http://www.baidu.com';//此处赋值会报错

// 2.使用type关键字声明一个OptionType类型来约束这个对象,避免修改options内部属性值

// type OptionType = {
//   url: string,
//   method: Methods
// };

// let options: OptionType = {
//   url: 'https://www.baidu.com/',
//   method: 'GET'
// };
// options.url = 'http://www.baidu.com';//此处赋值会报错

// 3.使用(as Methods)来限制options内的method属性必须是Methods类型,避免修改options内部属性值
let options = {
  url: 'https://www.baidu.com/',
  method: 'GET'
};
options.method = 'PUT'
options.url = 'http://www.baidu.com';

request(options.url, options.method as Methods);
// request(options.url, options.method);