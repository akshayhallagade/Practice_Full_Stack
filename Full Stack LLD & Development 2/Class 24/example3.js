const fs = require("fs");

// Example 1 -- Here, readFile is a
console.log("Start");
fs.readFile("f1.txt", function (err, data) {
  if (err) console.log(err);
  else console.log("File 1 Data > ", data);
});

console.log("end");

// // Example 2
// console.log("Start");
// const readd = fs.readFileSync("f1.txt");
// console.log(readd);
// console.log("end");
