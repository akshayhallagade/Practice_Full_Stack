// // Example 1
// console.log("A");
// console.log("B");
// console.log("C");
// ..........................

// // Example 2
// setTimeout(() => {
//   console.log("Z");
// }, 1000);

// setTimeout(() => {
//   console.log("A");
// });

// console.log("B");

// setTimeout(() => {
//   console.log("C");
// }, 0);

// ..........................
// // Example 3
// var isChamp = true;
// while (isChamp) {
//   console.log("A");
// }
// console.tog("B");

// setTimeout(function () {
//   console.log("C");
// }, 0);
// // This Code will crash - Infinite loop

// ..........................
// // Example 4
// setTimeout(function () {
//   console.log("C");
// });

// for (var i = 0; i < 10000; i++) {
//   console.log("A");
// }
// console.log("B");

// // // ..........................
// // Example 5
// setTimeout(function () {
//   console.log("A");
// }, 0);
// setTimeout(function () {
//   console.log("B");
// }, 0);
// setTimeout(function () {
//   console.log("C");
// }, 0);
// setTimeout(function () {
//   console.log("D");
// }, 0);
