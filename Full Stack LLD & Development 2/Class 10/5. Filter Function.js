// ...................................................................................
// ...................................................................................
// ............................3. Filter Function .......................................
// ..................--> Used to iterate over a array ................................
// ...................................................................................

// .....................................................................................
// .............................. Using ForEach .......................................
// .....................................................................................

function convert3(item, ch) {
  const result = [];
  names3.forEach(function (item) {
    if (item.includes(ch)) {
      result.push(item);
    }
  });
  return result;
}

const names3 = ["Atul", "Kavya", "Sandhiya"];
console.log(convert3(names3, "y"));

// .....................................................................................
// .............................. Using filter.......................................
// .....................................................................................

function convert4(item, ch) {
  const result = item.filter(function (item) {
    return item.includes(ch);
  });
  return result;
}

const names4 = ["Atul", "Kavya", "Sandhiya"];
console.log(convert3(names4, "y"));

// .......................................
// Another way
const ans = names4.filter((item) => {
  return item.includes("K");
});
console.log(ans);
