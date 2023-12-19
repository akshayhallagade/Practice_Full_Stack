const getTotalBillAmount = (items) => {
  items[1] = 100; //mutating data
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i];
  }
  return total;
};

const bills = [200, 200, 100, 400];
console.log(getTotalBillAmount([...bills]));
