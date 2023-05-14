// type类型声明
type InfoType = {
  name: string;
  age: number;
  friend?: {
    name: string;
    age: number;
  }
}

// interface接口声明一个对象类型
interface IInfoType {
  name: string;
  age: number;
  friend?: {
    name: string;
    age: number;
  }
}

const info: IInfoType = {
  name: 'curry',
  age: 35,
  // friend: {
  //   name: 'james',
  //   age: 45
  // }
}

const info2: InfoType = {
  name: 'jodern',
  age: 65,
  friend: {
    name: 'kobe',
    age: 49
  }
}

console.log(info?.friend?.age);
