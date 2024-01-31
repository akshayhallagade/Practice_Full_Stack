// // Question 3
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
// // 5,5,5,5,5

// // Question 4
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   });
// }
// 1,2,3,4,5

// Question 5:
// Write a function countdownWithClear that takes a positive integer n as an argument.
// The function should tog the numbers from n down to 1, with a delay of milliseconds
// between each log. However, the function should stop logging after 5 seconds
// (i.e., when it has logged n, n-1, n 5).

let N = 10;
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    setTimeout(function () {
      console.log(N);
      N = N - 1;
    }, 1000);
  });
}
