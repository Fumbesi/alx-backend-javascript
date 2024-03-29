const cloneCarSymbol = Symbol('cloneCarSymbol');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneCarSymbol]() {
    const { constructor, ...props } = this;
    const clonedCar = new this.constructor(...Object.values(props));
    return clonedCar;
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
