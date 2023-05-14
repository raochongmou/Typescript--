// 参数顺序(必传参数 ==> 有默认值参数 ===> 可选参数) 编程规范
function getParams(x: number, y: string = 'aaa', z?: boolean) {
  console.log('x:',x ,'y:',y ,'z:',z);
}

getParams(10);
getParams(20, 'bbb');
getParams(30, 'ccc', false);