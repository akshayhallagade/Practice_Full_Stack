// // Question 1:

// // Create an animation function continuousAnimation that continuously
// // changes the background color of an element between red and blue.
// // The function should take the element's ID as an argument and update the
// // background color every 500 milliseconds.

// function continuousAnimation(elementId) {
//   let col = "red";
//   setInterval(() => {
//     if (col == "red") col = "blue";
//     else col = "red";
//     document.querySelector("elementId").style.backgroundColor = col;
//   }, 500);
// }

// ........................................................................
// Question 2:

// var obj = {
//   name: "Nirmal",
//   logDetail: function () {
//     setTimeout(function () {
//       console.log(this);
//     });
//   },
// };

// obj.logDetail(); // window
// Note : Whenever the async function (setTimeOut) is present in non premitive data type
//        even if your gf(obj) is with you, ans will be window.
// ........................................................................

// // Question 3
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
// // 5,5,5,5,5

// Note : As the variable type is var, once all the for loop is get run then
//        setTimeout will run soo it will fet the final output of var i.e. 5.
// ........................................................................

// // Question 4
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
// 0, 1, 2, 3, 4;
// Here, let is used instead of var. 'let' is having block scope and
//        so to every setTime it give different value sooo
//        even though all the setTimeout will get execute after
//        all the for loop executed they will print different values i.e. 0,1,2,3,4
// ........................................................................

// Question 5:
// Write a function countdownWithClear that takes a positive integer n as an argument.
// The function should tog the numbers from n down to 1, with a delay of milliseconds
// between each log. However, the function should stop logging after 5 seconds
// (i.e., when it has logged n, n-1, n 5).

// // This will not work.
// let N = 50;
// for (let i = N; i > N - 20; i--) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// // This will work.
// function countdownWithClear(n) {
//   let i = n;

//   var intervelRef = setInterval(() => {
//     console.log(i);
//     if (i == 30) clearInterval(intervelRef);
//     i--;
//   }, 1000);
// }
// countdownWithClear(50);

// ........................................................................
