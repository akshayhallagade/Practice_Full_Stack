const fs = require("fs");

// // MakeDirectory Sync
// fs.mkdirSync("dir");

// // MakeDirectory Async
// fs.mkdir("Dir", (err) => {
//     if (err) console.log("error");
// });
// //..........................

// // Delete Directory Sync
// fs.rmdirSync("Dir");

// //..........................

// return true if folder present
console.log(fs.existsSync("dir"));
