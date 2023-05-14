// const el = document.getElementById('curry') as HTMLImageElement;
// el.src = 'url';

class Person {
  say() {
    console.log('hello');
  }
}

class Stundent extends Person {

}
// 类型断言让Student类作为Person类来调用Person类内的方法
function getInfo(person: Person) {
  (person as Stundent).say();
}

const s1 = new Stundent();

getInfo(s1);

// 特殊用法 将一个字符串类型先转化成any/unknown 类型,再来传化成number类型 不推荐(让类型变得混乱)
const message = "新闻消息";
const num: number = (message as any) as number;