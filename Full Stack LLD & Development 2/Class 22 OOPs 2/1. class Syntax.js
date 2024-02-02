class Car1 {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.getDetailes = function () {
      return `Car Model is ${this.model} and color is ${this.color}`;
    };
  }
  getDetailes() {
    return `Car Model is ${this.model} and color is ${this.color}`;
  }
}

const BMWCar = new Car1("BMW", "red");
const MercedesCar = new Car1("Mercedes", "black");
console.log(BMWCar);
console.log(BMWCar.getDetailes());

// Here,
// constructor -- Creates Constructor
// class variables are -- this.model and this.color
// class variable -- this.getDetailes function <--- Important
// class method  -- getDetailes
// ...................................................................
