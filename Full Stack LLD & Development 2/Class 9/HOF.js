// function sum(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(sum(1)(2)(3));
// // ............................

function multiply(x) {
  return function (y) {
    return x * y;
  };
}
console.log(multiply(2)(3));
