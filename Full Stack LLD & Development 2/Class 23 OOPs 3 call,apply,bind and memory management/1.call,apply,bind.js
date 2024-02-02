let student = {
  firstName: "Adam",
  lastName: "Smith",
  age: 25,
  getEmail: function () {
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  },
};

let teacher = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 35,
  getEmail: function () {
    console.log(`${this.firstName}.${this.lastName}@gmail.com`);
  },
};
let manager = {
  firstName: "Vzade",
  lastName: "Rogers",
  age: 35,
};

// const getRasikaEmail = student.getEmail;
// console.log(getRasikaEmail()); // undefined.undefined@gmail.com"

// student.getEmail(); //'Adam.Smith@gmail.com'
// teacher.getEmail(); //'Steve.Rogers@gmail.com'

// ..............................
// // Call Function
// student.getEmail.call(teacher); //'Steve.Rogers@gmail.com'
// student.getEmail.call(manager); //'Vzade.Rogers@gmail.com'

// ..............................
// // bind Function
// const getLavanyaEmail =student.getEmail.bind(teacher);
// getLavanyaEmail();

// const getVinethaEmail = getLavanyaEmail.bind(manager);
// getVinethaEmail();
