'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get getWidth() {
    return `${this._width}см`;
  },

  get getHeight() {
    return `${this._height}см`;
  },

  set setWidth(value) {
    this._width = value;
  },

  set setHeight(value) {
    this._height = value;
  },

  get calculatePerimetr() {
    return `Perimetr is ${(this._width + this._height) * 2}см.`;
  },

  get calculateSquare() {
    return `Square is ${this._width * this._height}см^2.`;
  },
};

rectangle.setHeight = 10;
rectangle.setWidth = 10;

console.log(`Height is ${rectangle.getHeight}.
Wigth is ${rectangle.getWidth}.
${rectangle.calculatePerimetr}
${rectangle.calculateSquare}`);
