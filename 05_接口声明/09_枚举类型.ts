// type定义类型
type DirectType = 'top' | 'bottom' | 'left' | 'right';
// 枚举定义类型
enum Directions {
  TOP = 100,
  BOTTOM,//101
  LEFT,//102
  RIGHT//103
}

function getDirection(direction: Directions) {
  switch(direction) {
    case Directions.TOP:
      console.log('TOP');
      console.log(Directions.TOP);
      break;
    case Directions.BOTTOM:
      console.log('BOTTOM');
      console.log(Directions.BOTTOM);
    break;
    case Directions.LEFT:
      console.log('LEFT');
      console.log(Directions.LEFT);
    break;
    case Directions.RIGHT:
      console.log('RIGHT');
      console.log(Directions.RIGHT);
    break;
    default:
      const nerveCome: never = direction;
      break;
  }
}

getDirection(Directions.TOP)
getDirection(Directions.BOTTOM)
getDirection(Directions.LEFT)
getDirection(Directions.RIGHT)
