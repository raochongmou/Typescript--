function makeArea(shap: Shap) {
  return shap.getArea();
}

// 抽象类的父类抽象方法不需要写实现体,继承的子类必须有实现父类的抽象类方法的实现体
abstract class Shap {
  abstract getArea(): any;
}

// 矩形
class Rectangle extends Shap {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();
    this._width = width;
    this._height = height;
  }

  getArea() {
    const { _width, _height } = this;
    return _width * _height;
  }
}

// 圆形
class Circle extends Shap {
  private _r: number;
  
  constructor(r: number) {
    super();
    this._r = r;
  }

  getArea() {
    const PI = 3;
    const { _r } = this;
    return PI*(_r*_r);
  }
}

// 不可以创建抽象类的实例
// console.log(makeArea(new Shap()));

console.log(makeArea(new Circle(15)));
console.log(makeArea(new Rectangle(15, 20)));


