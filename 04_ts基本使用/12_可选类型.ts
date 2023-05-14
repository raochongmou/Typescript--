function printPoint(point: {x: number, y: number; z?: number}) {
  console.log(point.x, point.y, point.z ? point.z : 'z为可选');
}

printPoint({x: 120, y: 130});
printPoint({x: 120, y: 130, z: 150});