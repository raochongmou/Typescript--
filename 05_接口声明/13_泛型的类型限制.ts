interface ILength {
  length: number;
}

function getLength<T extends ILength>(len: T) {
  return console.log(len.length);
}

getLength("123");
// 元组应用
getLength<[string, string, boolean]>(["123", "321", false]);
getLength<{name: string, length: number, age: number}>({length: 100, name: 'curry', age: 35});