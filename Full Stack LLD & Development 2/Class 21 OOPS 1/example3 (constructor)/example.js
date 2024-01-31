// Using Object Literal

const marriage = {
  name: "Akshay",
  age: 19,
  company: `NA`,
  address: { city: "Nagpur" },
  getDetailes: function () {
    return `I am ${this.name} with age ${this.age}, currently working in the compamy ${this.company}`;
  },
};

// Using function
function Person(name, age, company, address) {
  this.name = name;
  this.age = age;
  this.company = company;
  this.address = address;
  this.getDetailes = function () {
    return `I am ${this.name} with age ${this.age} currently working at ${this.company}.`;
  };
}

const akshayMarriage = new Person("Akshay", 19, "NA", "Nagpur");
console.log(akshayMarriage.getDetailes());

// Using class
class Marriage {
  constructor(name, age, company, address) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.address = address;
    this.getDetailes = function () {
      return `I am ${this.name} with age ${this.age} currently working at ${this.company}.`;
    };
  }
}

const atulMarriage = new Marriage("Aashutosh", 100, "Na", "Nagpur");
console.log(marriage.getDetailes());
