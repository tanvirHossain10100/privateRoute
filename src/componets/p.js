// class MyObject {
//   constructor() {
//     this.myProperty = "I am a property";
//   }

//   myMethod() {
//     return () => {
//       console.log(this.myProperty);
//     };
//   }
// }

// const instance = new MyObject();
// const myFunction = instance.myMethod();
// const myArrowFunction = instance.myMethod;

// myFunction(); // What will this log?
// myArrowFunction(); // How about this one?
const size = [3, 4, 5, 6];
const diameter = (x) => {
  console.log(x);
  return 2 * x;
};
const b = (x) => {
  return Math.PI * x * 2;
};
const area = (arr, sotro) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(sotro(i));
  }
  return result;
};
// console.log(area(size, diameter));
console.log(area(size, b));
