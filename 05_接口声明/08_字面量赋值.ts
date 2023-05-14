interface IInfo {
  name: string;
  age: number;
  tel: number;
}

// 类型报错  IInfo中不存在address属性
// const info: IInfo = {
//   name: '1curry',
//   age: 35,
//   tel: 110,
//   address: '武汉'
// }
const info = {
  name: '1curry',
  age: 35,
  tel: 110,
  address: '武汉'
}

// 类型擦除(refresh clear),不会报类型错误
const infos: IInfo = info

function infoFn(i: IInfo) {
  console.log(i.age);
  // 无法读取不存在的接口类型属性
  // console.log(i.address);
  console.log(i);
}

// 如果直接传一个对象且对象内的属性与接口类型的属性不一致时,会触发类型检测
// infoFn({
//   name: 'curry',
//   age: 35,
//   tel: 120,
//   address: '湖北'
// });
// 如果传的是对象的引用  调用时不会触发类型检测,但是函数实现体内无法读取接口类型不存在的属性,这样也会触发类型检测
infoFn(info);

export{}