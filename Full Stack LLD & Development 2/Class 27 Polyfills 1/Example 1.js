var arr = ["gf1", "gf2", "gf6", "gf4"];
// Output: ["GF_1","GF_2,"GF_6,"GF_4"]

// ....................Answer Codes .........................
// .......................................
// //Slice and forEach
// const output = [];
// arr.forEach(function (item) {
//   let newitem = item.slice(0, 2).toUpperCase() + "_" + item.slice(2);
//   output.push(newitem);-
// });
// console.log(output);
// .......................................

// // using forEach only
// arr.forEach(function (item, index) {
//   arr[index] = "GF_" + item[2];
// });
// console.log(arr);
// .......................................

// // One liner code
// let newArr = arr.join().replaceAll("gf", "GF_").split(",");
// newArr;
//........................................

// // // Using Map
// const output = arr.map((item) => {
//   return item.replace("gf", "GF_");
// });
// console.log(output);
// .............................................................
