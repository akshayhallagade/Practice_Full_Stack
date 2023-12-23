// Example 1 : Return Uppercase of the names, without modifying the array.

const names = ["Atul", "Kavya", "Sandhiya"];
// Output : ["ATUL","KAVYA","SANDHIYA"]

function convert(cd) {
  result = [];
  for (let i = 0; i < cd.length; i++) {
    result[i] = cd[i].toUpperCase();
  }
  return result;
}

console.log(names);
console.log(convert(names));
