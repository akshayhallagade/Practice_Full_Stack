// // Question 1
// console.log(x); // error : referenceError
//...........................

// // Question 2
// y = 1;
// console.log(y); // 1
// var y;
//...........................

// // Question 3
// console.log(z); // undefined
// var z=1;
//...........................

// // Question 4
// a = 1;
// console.log(a); // error : referenceError.
// let a;
//...........................

// // Question 5
// console.log(b);
// let b = 1;
//...........................

// // Question 6
// console.log(c); // Error : ReferenceError
// c = 1;
//...........................

// // Question 7
// console.log(sum); // undefined
// var sum = function (a, b) {
//   return a + b;
// };

//...........................

// // Question 8
// console.log(total); // error : referenceError
// let total = function (a, b) {
//   return a + b;
// };

//...........................

// // Question 9
// console.log(sum1(1, 2)); // 3
// function sum1(a, b) {
//   return a + b;
// }
//...........................

// // Question 10
// function example1() {
//   if (true) {
//     var aa = 1; // var is function scope
//     let bb = 2; // let is block scope
//   }
//   console.log(aa); // 1
//   console.log(bb); // Error : referenceError
// }
// example1();
//...........................

// // Question 11
var cc = 20;
function example1() {
  if (true) {
    var cc = 1; // var is function scope
  }
  console.log(cc); // 20
}
example1();
console.log(cc); // 20
//...........................

// function parent2() {
//   var a = 20;
//   function child() {
//     console.log(a); // A.
//     function child2() {
//       console.log(a); // B.
//     }
//     var a = 10;
//     child2();
//   }
//   child();
//   console.log(a);
// }
// parent2();

// function parent3() {
//   var a = 20;
//   function child() {
//     console.log(a); // A.
//     function child2() {
//       console.log(a); // B.
//       var a = 30;
//     }
//     a = 10;
//     child2();
//   }
//   child();
//   console.log(a);
// }
// parent3();

// let c = 0;
// function counter() {
//   c = c + 1;
//   console.log(c);
// }
// counter();
// counter();
// counter();
