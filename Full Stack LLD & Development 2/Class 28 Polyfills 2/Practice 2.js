// ...........Restructered the Codes........

// // Question 15
// function parent2() {
//   var a;
//   function child() {
//     var a;
//     function child2() {
//       console.log(a); // 10
//     }
//     console.log(a); // undefined
//     a = 10;
//     child2();
//   }
//   a = 20;
//   child();
//   console.log(a); //20
// }
// parent2();

//...........................

// // // Question 16
// function parent3() {
//   var a;
//   function child() {
//     function child2() {
//       var a;
//       console.log(a); //undefined
//       a = 30;
//     }
//     console.log(a); // 20
//     a = 10;
//     child2();
//   }
//   a = 20;
//   child();
//   console.log(a); // 10
// }
// parent3();
// //...........................

// // // Question 17
// function parent4() {
//   var a;
//   function child() {
//     let a = 10;
//     function child2() {
//       console.log(a); // 10
//       a = 30;
//     }
//     console.log(a); //10
//     console.log(a); //10
//     child2();
//   }
//   a = 20;
//   child();
//   console.log(a); // 20
// }
// parent4();
// //...........................

// // Question 18
function parent5() {
  var a;
  function child() {
    let a = 10;
    function child2() {
      console.log(a); //10
      a = 30;
    }
    console.log(a); // 10
    child2();
    console.log(a); // 30
  }
  a = 20;
  child();
  console.log(a); //20
}
parent5();
// //...........................
