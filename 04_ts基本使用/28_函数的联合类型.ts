function add(num1: number | string, num2: number | string) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return console.log(num1 + num2);
  } else if(typeof num1 === "string" && typeof num2 === "string") {
    return console.log(num1 + num2);
  }
}

add(10, 20);
add('20', '30');

export {};