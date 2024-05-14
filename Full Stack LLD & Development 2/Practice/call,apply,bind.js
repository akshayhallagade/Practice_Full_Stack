// => Call, Apply, Bind.
// ===> This are the methods basically used to use the functions that are written in another object.

const obj1 = {
  name: "Akshay",
  age: "25",
  tp: function (salary) {
    return this.name + this.age + salary;
  },
};

const obj2 = {
  name: "Aniket",
  age: "21",
};

// const ans1 = obj1.tp.call(obj2, 30000);
// const ans2 = obj1.tp.apply(obj2, [400000]);
// ans1;
// ans2;

// .......bind method............
const ans = obj1.tp.bind(obj2);
console.log(ans());
// console.log(ans());
