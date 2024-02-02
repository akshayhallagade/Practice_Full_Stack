// Parent Class
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.getDetails = function () {
      return `Car model is ${this.model} and color is ${this.color}`;
    };
  }
  getModel() {
    return `Model is ${this.model}`;
  }
}

// child Class
class SuperCar extends Car {
  // <--- Important
  constructor(features, price, model, color) {
    super(model, color); // <---- Important
    this.features = features;
    this.price = price;
  }
  getOnRoadPrice() {
    return this.price + 100000;
  }
}

const BMWCar = new SuperCar(["f1"], 10000000, "BMW", "red");
const MercedesCar = new SuperCar(["f1", "f2"], 20000000, "Mercedes", "black");
console.log(BMWCar);
console.log(BMWCar.getModel());
