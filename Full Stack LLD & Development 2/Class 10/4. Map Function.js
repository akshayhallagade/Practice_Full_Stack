// ...................................................................................
// ...................................................................................
// ............................2. Map Function .......................................
// ...........--> Used to iterate over a array and give it to variable ...............
// ...................................................................................

// .....................................................................................
// .............................. Imperative Way .......................................
// .....................................................................................
function convert(cd) {
  const result = []; // Creating new array to overcome the problem mutation with original array.
  for (let i = 0; i < cd.length; i++) {
    result.push(cd[i].toUpperCase());
  }
  return result;
}

const names = ["Atul", "Kavya", "Sandhiya"];
console.log(convert(names));

// .....................................................................................
// ........................ Declarative Way using forEach .................................
// .....................................................................................
function convert1(cd) {
  const result = [];
  cd.forEach(function (item) {
    result.push(item.toUpperCase());
  });
  return result;
}

const names1 = ["Atul", "Kavya", "Sandhiya"];
console.log(convert1(names1));
// .....................................................................................
// ...................... Declarative Way using Map ....................................
// .....................................................................................
function convert2(cd) {
  const result = cd.map(function (item) {
    return item.toUpperCase();
  });
  return result;
}

const names2 = ["Atul", "Kavya", "Sandhiya"];
console.log(convert2(names2));

// ------------------------------------------------
// another simple way
const ans = names2.map((item) => {
  return item;
});
console.log(ans);
