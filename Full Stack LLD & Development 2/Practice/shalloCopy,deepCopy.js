// Shallow Copy
const obj1 = {
  firstName: "Akshay",
  lastName: "Hallagade",
  address: {
    city: "Wardha",
    state: "Maharashtra",
  },
};

const b = { ...obj1 };
b.address.city = "Nagpur";
// obj1.lastName = "Zade";
console.log(obj1);
console.log(b);

// Deep Copy
// using : JSON
const deep = JSON.parse(JSON.stringify(obj1));
deep.address.city = "Pune";
console.log(deep);

// Creating our own function
