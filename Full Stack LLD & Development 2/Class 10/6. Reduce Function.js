// ...................................................................................
// ...................................................................................
// ............................3.Reduce Function .....................................
// .....--> Reduces array into a accumulated value as per as the condition. ..........
// ...................................................................................

// ....................................................................................
// .............................. Example 1.......................................
// ....................................................................................

function getTotalBillAmount(cd) {
  const result = cd.reduce(function (total, item) {
    total = total + item;
    return total;
  }, 0);
  return result;
}

const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills));

// .....................................................................................
// .............................. Example 2.......................................
// .....................................................................................

//  Output  = {
//     name="Rajeev",
//     city="Banglore",
//     age=20
// }

function convertIntoObj(cd) {
  const result = cd.reduce(function (acc, item) {
    const key = item[0];
    const value = item[1];
    acc[key] = value;
    return acc;
  }, {});
  return result;
}

const data = [
  ["name", "Rajeev"],
  ["city", "Bangalore"],
  ["age", 20],
];
console.log(convertIntoObj(data));
