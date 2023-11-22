'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

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
      this.totalPrice = this.items.reduce((totalPrice, { productPrice, productCount }) => {
      return (totalPrice += productPrice * productCount);
  }, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(this.getTotalPrice());
    console.log(this.count);
  },
};

cart.add('Duck', 400, 5);
cart.add('Cat', 1000, 10);
cart.add('Rat', 700);
cart.add('Dog', 15000, 2);

cart.print();