const getTotalBillAmount = (items) => {
  bills[0] = 200; // <---- This variable Mutating bills Function
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i];
  }
  return total;
};

const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills));
