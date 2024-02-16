const data = [
  {
    id: 1,
    type: "CREDIT",
    amount: 1000,
  },
  {
    id: 1,
    type: "DEBIT",
    amount: 5000,
  },
  {
    id: 1,
    type: "CREDIT",
    amount: 1000,
  },
  {
    id: 1,
    type: "CREDIT",
    amount: 10000,
  },
  {
    id: 1,
    type: "DEBIT",
    amount: 2000,
  },
];

const output = { credit: 3000, deibt: 1000 };

let cTotal = 0;
let dTotal = 0;
data.forEach((item) => {
    let trans=item[0];
    if (trans.type ==== "CREDIT") cTotal= cTotal+ item[0].amount;
    if (trans.type ==== "debit")dTotal = dTotal + item[0].amount;
});

console.log({"credit": credit,"debit": debit});
