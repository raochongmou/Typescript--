const message: "hello world" = "hello world";

let num: 123 = 123;
// 不可修改字面量类型的值
// num = 456
// 字面量应用场景 与联合类型使用
type DirectType = 'left' | 'right' | 'top' | 'bottom'
let direction: DirectType = 'left'
direction = 'top';
// 只能赋值类型中有的值
// direction = 'abc';

export{}