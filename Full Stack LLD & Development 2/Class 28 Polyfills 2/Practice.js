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

// // // Question 11
// var cc = 20;
// function example1() {
//   if (true) {
//     var cc = 1; // var is function scope
//   }
//   console.log(cc); // 20
// }
// example1();
// console.log(cc); // 20
//...........................

// // Question 12
// var dd = 20;
// function example1() {
//   if (true) {
//     dd = 1; // var is function scope
//   }
//   console.log(dd); // 1
// }
// example1();
// console.log(dd); // 1  // Coz, Outer varible got updated.
//...........................

// // // Question 13
// function parent() {
//   var a = 20;
//   function child() {
//     console.log(a); // 20
//   }
//   child();
// }
// parent();
//...........................

// // // Question 14a
// function parent1() {
//   var a = 20;
//   function child() {
//     console.log(a);
//     function child2() {
//       console.log(a);
//     }
//   }
//   child2(); // error : ReferenceError
// }
// parent1();
// //...........................

// // // Question 14b
// function parent2() {
//   var a = 20;
//   function child() {
//     console.log(a); // 20
//     function child2() {
//       console.log(a); // 20
//     }
//     child2();
//   }
//   child();
// }
// parent2();
//...........................

// // Question 15
// function parent2() {
//   var a = 20;
//   function child() {
//     console.log(a); // undefined
//     function child2() {
//       console.log(a); // 10
//     }
//     var a = 10;
//     child2();
//   }
//   child();
//   console.log(a); //20
// }
// parent2();
//...........................

// // // Question 16
// function parent3() {
//   var a = 20;
//   function child() {
//     console.log(a); // 20
//     function child2() {
//       console.log(a); // undefined
//       var a = 30;
//     }
//     a = 10;
//     child2();
//   }
//   child();
//   console.log(a); //10
// }
// parent3();
// //...........................

// // // Question 17
// function parent4() {
//   var a = 20;
//   function child() {
//     let a = 10;
//     console.log(a); // 10
//     function child2() {
//       console.log(a); // 10
//       a = 30;
//     }
//     console.log(a); // 10
//     child2();
//   }
//   child();
//   console.log(a); //20
// }
// parent4();
// //...........................

// // Question 18
function parent5() {
  var a = 20;
  function child() {
    let a = 10;
    console.log(a); // 10
    function child2() {
      console.log(a); //10
      a = 30;
    }
    child2();
    console.log(a); //30
  }
  child();
  console.log(a); // 20
}
parent5();
// //...........................
