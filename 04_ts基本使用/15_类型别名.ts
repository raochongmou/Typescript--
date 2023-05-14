type unionType = number | string | boolean;
// type printPotin = {
//   x: number
//   y: number
//   z?: number
// }
type printPotin = {
  x: number,
  y: number;
  z?: number,
}

function getId(id: unionType) {
  console.log(id);
}
getId(123);
getId("123");
getId(123 > 5);

function getPotin(point: printPotin) {
  const {x, y, z} = point;
  console.log(x, y, z ? z : 'z为可选参数');
}
getPotin({x: 132, y: 333});
getPotin({x: 132, y: 333, z: 456});