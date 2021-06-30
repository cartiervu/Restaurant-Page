class Dish {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }
}

export default Dish;