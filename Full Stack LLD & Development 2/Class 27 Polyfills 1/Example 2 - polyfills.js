// const arr = ["gf1", "gf2", "gf6", "gf4"];
// const output = [];
// arr.forEach((element, index) => {
//   const newEle = element.replace("gf", "GF_");
//   output.push(newEle);
// });

// ....... Polyfill for the forEach().........
if (!Array.prototype.myForEach) {
  // Implement the logic for "forEach"
  Array.prototype.myForEach = function (callback) {
    const length = this.length;
    for (var i = 0; i < length; i++) {
      // Execute Callback --> callback(this[i],i,this)
      callback(this[i], i, this);
    }
  };
}
// ........working of myFilter polyfill ............
const output = [];
const arr = [2, 4, 4, 5, 56];
arr.myFilter((ele) => {
  output.push(ele * 3);
});
output;
// .......................................................................
// //...........Normal Map Function ............
// // const arr = [3, 4, 5, 6];
// // const output = arr.map((ele) => {
// //   return ele * 2;
// // });

// // output;

// //........... Polyfill for the map()............
// if (!Array.prototype.myMap) {
//   // Implement the logic for "forEach"
//   Array.prototype.myMap = function (callback) {
//     const output = [];
//     for (var i = 0; i < this.length; i++) {
//       const newItem = callback(this[i], i, this);
//       output.push(newItem);
//     }
//     return output;
//   };
// }

// // ........working of myFilter polyfill ............
// const arr = [3, 7, 3, 2, 34, 4];
// const output = arr.myFilter((ele) => {
//   return ele * 3;
// });
// output;

// .........................................................................
// // .........Normal Filter Function ............
// const arr2 = [23, 4, 45, 5, 4, 2, 3];
// const output = arr2.filter((ele) => {
//   return ele % 2 == 0;
// });
// output;

// // // ....... Polyfill for the Filter().........
// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     const output = [];
//     for (var i = 0; i < this.length; i++) {
//       const newItem = callback(this[i], i, this);
//       if (newItem) output.push(this[i]);
//     }
//     return output;
//   };
// }
// // ........working of myFilter polyfill ............
// const arr = ["str", "pika", "akshay"];
// const output = arr.myFilter((ele) => {
//   return ele.includes("a");
// });
// output;
// .........................................................................
// // ..........Normal Reduce Function..........
// const arr = [7, 2, 3, 5, 6];
// const output = arr.reduce((total, ele) => {
//   return total + ele;
// });
// output;

// // ..........Polyfill for the reduce..........
// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function (callback, initializer) {
//     const output = [];
//     let total = initializer != undefined ? initializer : 0;
//     for (var i = 0; i < this.length; i++) {
//       total = callback(total, this[i]);
//       output.push(total);
//     }
//     return output;
//   };
// }

// // // ........working of myReduce polyfill ............
// const arr = [7, 2, 3, 5, 6];
// const output = arr.myReduce((total, ele) => {
//   return total + ele;
// });
// output;

// .........................................................................
