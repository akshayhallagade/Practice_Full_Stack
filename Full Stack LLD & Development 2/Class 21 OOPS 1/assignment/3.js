class Car {
  constructor(brand) {
    this.brand = brand;
  }
  static getBrand() {
    return this.brand;
  }
}

console.log(Car.getBrand());
