function unionType(params: boolean | number | string) {
  // narraw范围缩小
  if(typeof params === 'string') {
    console.log(params.length);
  } else {
    console.log(params);
  }
}

unionType(123>0);
unionType(123);
unionType('123');
