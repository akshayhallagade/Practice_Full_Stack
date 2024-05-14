// // ForEach
// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i);
//     }
//   };
// }

// // Map
// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (callback) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//       output.push(callback(this[i], i));
//     }
//     return output;
//   };
// }

// // Filter
// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i)) output.push(this[i]);
//     }
//     return output;
//   };
// }

// // Reduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, acc = 0) {
    let total = acc;
    for (let i = 0; i < this.length; i++) {
      total = callback(total, this[i]);
    }
    return total;
  };
}

// .....................................
const arr = [1, 2, 3, 4, 5];
// arr.forEach((item) => {
//   console.log(item);
// });

// arr.myForEach((item) => {
//   console.log(item);
// });

// const newArr = arr.myMap((item) => item + 2);
// newArr;

// const filterArray = arr.myFilter((item) => {
//   return item % 2 == 0;
// });
// filterArray;

const reduceArray = arr.myReduce((total, item) => {
  total = total + item;
  return total;
}, 0);

reduceArray;
