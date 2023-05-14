function handleMessage(message: number | string | boolean) {
  switch (typeof message) {
    case 'number':
      console.log('number');
      break;
    case 'string':
      console.log('string');
      break;
    case 'boolean':
      console.log('boolean');
      break;
    default:
      // 永远不会来到default,没有never类型
      const check: never = message;
      console.log('check');
      break;
      
  }
}
handleMessage('123');
handleMessage(123);
handleMessage(true);
handleMessage(1<0);