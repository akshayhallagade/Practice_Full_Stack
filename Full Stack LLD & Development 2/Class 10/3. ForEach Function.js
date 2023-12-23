// ......................................................................................
// ............................ 1. Foreach Function .....................................
// ..................--> Used to iterate over a array ...................................
// ......................................................................................

// .....................................................................................
// .............................. Imperative Way .......................................
// .....................................................................................
const getTotalBillAmount = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
};

const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills));

// ...................................................................................
// ............................ Declarative Way ......................................
// ...................................................................................
const getTotalBillAmount1 = (items) => {
  let total = 0;
  items.forEach(function (item) {
    total = total + item;
  });
  return total;
};

const bills1 = [100, 200, 100, 400];
console.log(getTotalBillAmount1(bills1));
