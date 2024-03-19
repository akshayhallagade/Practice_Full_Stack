const nameObject = {
  fname: "Akshay",
  lname: "Hallagade",
  name: function () {
    console.log(this.fname, this.lname);
  },
};
const nameObject2 = {
  fname: "Aniket",
  lname: "Hallagade",
};
nameObject.name.bind(nameObject2)();

console.log(nameObject2.name);
