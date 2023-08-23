// test case of shapes 

const Triangle = require('./shapes').triangle;
const Circle = require('./shapes').circle;
const Square = require('./shapes').square;

describe('Triangle', () => {
  test('Display triangle shape logo with given string and color ', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.renderShapes()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('Display circle shape logo with given string and color ', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.renderShapes()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('Display square  shape logo with given string and color ', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.renderShapes()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });
});