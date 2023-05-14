function getNum<K>(num: K): K{
  return num;
}

// 如果有给定泛型类型,则K根据给定的泛型类型来推导
// 如果不给定泛型类型,则K根据返回值类型的定义K为返回值得字面量类型
// 如果没有返回值,则会默认根据传入的传参数来推导k/j/l的类型
getNum<number>(123);
getNum('123');

function getConsum<k, j, l>(arg1: k, arg2: j, arg3: l) {};

getConsum('a', 1, true);
getConsum('a', 1, [123]);
getConsum('a', 1, {name: 'curry'});