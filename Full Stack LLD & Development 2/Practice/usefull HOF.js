const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // ForEach
// array.forEach((item) => {
//   console.log(item);
// });

// // Map
// const mapArray = array.map((item) => {
//   return item * 4;
// });
// console.log(mapArray);

// // Filter
// const filterArray = array.filter((item) => {
//   return item % 2 == 0;
// });
// console.log(filterArray);

// Reduce
const reduceArray = array.reduce((total, item) => {
  total += item;
  return total;
}, 0);

console.log(reduceArray);
