let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  skills: ["JavaScript", "React", "Node.js"],
  asdd: () => {
    return 3 + 4;
  },
};

let stringifyObject = JSON.stringify(person);
console.log(stringifyObject);

console.log(JSON.parse(stringifyObject));
