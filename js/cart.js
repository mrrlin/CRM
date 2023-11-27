const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  add(productName, productPrice, productCount = 1) {
    const item = {
      productName,
      productPrice,
      productCount,
    };

    this.items.push(item);
    this.calculateItemPrice(productPrice);
    this.increaseCount(productCount);
  },

  increaseCount(productCount) {
    this.count += productCount;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) =>
      (acc += item.productCount * item.productPrice), 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(this.totalPrice);
    console.log(this.count);
  },
};

cart.add('Duck', 400, 5);
cart.add('Cat', 1000, 10);
cart.add('Rat', 700);
cart.add('Dog', 15000, 2);

cart.print();
