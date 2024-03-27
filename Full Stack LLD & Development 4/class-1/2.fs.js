const fs = require("fs");

// // Read Synchronous
// const field1data = fs.readFileSync("file1.txt");
// console.log("" + field1data);

// // ReadAsync
// fs.readFile("file1.txt", (err, data) => {
//   if (err) console.log("error");
//   console.log("" + data);
// });

//-------------------------------------

// // Write Synchronous
// fs.writeFileSync("file1.txt", "my name is Akshay.");

// // Write Asynchronous
// fs.writeFile("file1.txt", "I am Akshayasdasd.", (err) => {
//   if (err) console.log(err);
// });

//-------------------------------------

// // Append Synchronous
// fs.appendFileSync("file1.txt", "I am Akshay.");

// Append Asynchronous
// fs.appendFile("file1.txt", "I am Akshay Hallagade", (err) => {
//   if (err) console.log("errror");
// });

//-------------------------------------
// // Delete File
// fs.unlinkSync("file1.txt");
