import { time, money } from "./utils/formatter";
import lodash from 'lodash';
import axios from 'axios';
import topImage from './img/top.png'; 

// console.log(time.name);//james
// console.log(lodash.join(["abc", 'cba']));


const p = new money.Person("curry", 35);

axios.request({
  url:'http://123.207.32.32:8000/home/multidata',
  method: 'GET'
}).then(res => {
  // console.log('res', res);
})

// p.eating();//eating  curry 
// console.log(p.name);//curry
// console.log(p.age);//35

foo();
console.log(names);
console.log(age);

const $_s = 'aaa';
console.log($_s);
console.log(rao);



const p1 = new Person('coderwhy', 36);
console.log(p1);
rao.ajax({url: "http://123.207.32.32:8000/home/multidata", method: 'GET'}).then((res: any) => {
  console.log("aaa", res);
});


