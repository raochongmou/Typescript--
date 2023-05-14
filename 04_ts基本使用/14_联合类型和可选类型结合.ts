// 等价于function getMessage(message: number | undefined),区别在于传值的时候不能不传
function getMessage(message?: number) {
  console.log(message);
}
// 如果不传值就是undefined
getMessage();//undefined

function getMsg(msg: number | undefined) {
  console.log(msg);
}

getMsg(undefined);
// getMsg();