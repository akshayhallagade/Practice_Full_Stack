//Fetch Data other file
const fs = require("fs");

const f1Promise = fs.promises.readFile("f1.txt");
f1Promise.then(
  (data) => console.log(data.toString()),
  (err) => console.log(err)
);

const f2Promise = fs.promises.readFile("f2.txt");
f2Promise.then(
  (data) => console.log(data.toString()),
  (err) => console.log(err)
);
