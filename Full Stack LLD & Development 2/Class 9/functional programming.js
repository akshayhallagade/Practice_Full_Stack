// // can be assigned to variable
// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum, 4, 5);
// // can pass functions as arguments
// const compute = function (cb) {
//   console.log(cb(2, 5));
//   return cb(3, 6);
// };

// console.log(compute(sum));
// ..................................

// // Function can be returned from another function
// const multiply = function (a, b, c) {
//   return a * b * c;
// };

// const compute = function (cb) {
//   return cb; //returning a function (multiply)
// };

// const multiplyFn = compute(multiply);
// console.log(multiplyFn(2, 3, 5));
// //......................................

// // Pure Function
// const matarpaneer = function () {
//   return num / 4;
// };

// // Impure function
// let water = 1;
// const generatedCurd = function () {
//   return (curd - water) / 4;
// };
// //..........................................

// //Immunutibility
// const getTotalBillAmount = (items) => {
//   items[1] = 100; //mutating data
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += items[i];
//   }
//   return total;
// };

// const bills = [200, 200, 100, 400];
// console.log(getTotalBillAmount([...bills]));
// console.log(bills);

// //..........................................
const names = ["Atul", "kavya", "Sandhiya"];

function convertToUpperCase(listOfNames) {
  for (var i = 0; i < listOfNames.length; i++) {
    listOfNames[i] = listOfNames[i].toUpperCase();
  }
  return listOfNames;
}
console.log(convertToUpperCase([...names]));
console.log(names);
