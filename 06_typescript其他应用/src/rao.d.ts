declare module 'lodash' {
  export function join(args: any[]): void
}
declare let names: string;
declare let age: number;

declare function foo(): void;

// 类的声明
declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number): void
}

// 声明文件
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.JPEG';
declare module '*.svg';

// 声明命名空间
declare namespace rao {
  export function ajax(args: any): any
}