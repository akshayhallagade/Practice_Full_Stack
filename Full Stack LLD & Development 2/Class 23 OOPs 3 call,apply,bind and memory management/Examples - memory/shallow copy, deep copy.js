const a = {
  firstName: "Atul",
  lastName: "Jha",
  address: {
    city: "Patna",
    state: "Bihar",
  },
};

// //.............Shallow Copy.............
// const b = { ...a }; // a.slice

// a.lastName = "Patil";
// console.log(b);

// // variable which didnt changed.
// a.address.city = "Australia";
// console.log(a, b);

// //.............Deep Copy 1.............
// const b = { ...a }; // a.slice
// b.address = { ...a.address };

// a.address.city = "Bankok";
// console.log(a, b);

// //.............Deep Copy 2.............
const b = JSON.parse(JSON.stringify(a));

a.address.city = "Chicago";
console.log(a, b);
