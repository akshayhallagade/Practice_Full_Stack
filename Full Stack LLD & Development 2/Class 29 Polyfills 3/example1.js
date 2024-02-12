// // Que 1 : Write a function sum(x)(y)(z)
// // return sum of x,y,z

// function sum(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(sum(1)(2)(3));   //6

// .............................
// Que 2 : Write a function sum1(x,y)(z)
// return sum of x,y,z

// function sum(x, y) {
//   return function (z) {
//     return function () {
//       return x + y + z;
//     };
//   };
// }
// console.log(sum(1, 2)(3)());  //6

// .............................

// // 03: Implement a function that generates a random
// // number between 1 and 100,
// // and returns a function that checks if a guessed
// // number matches
// // the generated number.

// function guessGame() {
//   var num = Math.round(Math.random() * 100 + 1, 2);
//   return function (input) {
//     if (num > Number(input)) console.log("Try a higher number");
//     else if (num < Number(input)) console.log("Try a lower number");
//     else console.log("Congratulations Right Answer.");
//   };
// }

// const guessNumber = guessGame();
// // guessNumber(20);
// // guessNumber(40);
// // guessNumber(45);
// ..............................................

// 04: Create a function that generates a sequence
// of Fibonacci numbers
// using closure.

function fibonacci() {
  var num0 = 0;
  var num1 = 1;
  var temp;
  console.log(num0);
  console.log(num1);
  return function fib() {
    temp = num0 + num1;
    console.log(num0 + num1);
    num0 = num1;
    num1 = temp;
  };
}

// 0 1 1 2 3 5
//
const generateFibonacci = fibonacci();
generateFibonacci(); // 0
generateFibonacci(); // 1
generateFibonacci(); // 1
generateFibonacci(); // 2
generateFibonacci(); // 3
generateFibonacci(); // 5
generateFibonacci(); // 8
generateFibonacci(); // 13
