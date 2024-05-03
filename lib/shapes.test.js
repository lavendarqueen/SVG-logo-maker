const Circle = require("../lib/circle");
const Square = require("../lib/square");
const Triangle = require("../lib/triangle");
// const Circle = require("./circle");

// Need to write tests for circle, square, and triangle but not for Shape

// Test to check that user's shapes and colors are rendered correctly
describe("Circle", () => {
  describe("render", () => {
    it("should be a purple circle", () => {
      const shapeCode = `<svg version="1.1"
      width="300"
      height= "200"
      xmlns="http://www.w3.org/2000.svg">
      <circle cx="150" cy="100" r="80" fill="purple"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="white">
        circle
      </text>
    </svg>`;
      const shapeTest = new Circle("circle", "purple", "white");
      expect(shapeTest.render()).toEqual(shapeCode);
    });
  });
});

describe("Square", () => {
  describe("render", () => {
    it("should be a blue square", () => {
      const shapeCode = `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="300" height="300" x="10" y="10" rx="20" ry="20" fill="blue"
  />
    <text
      x="150"
      y="125"
      font-size="60"
      text-anchor="middle"
      fill="white"
    >
      square
    </text>
  </svg>`;
      const shapeTest = new Square("square", "blue", "white");
      expect(shapeTest.render()).toEqual(shapeCode);
    });
  });
});

describe("Triangle", () => {
  describe("render", () => {
    it("should be a yellow triangle", () => {
      const shapeCode = `<svg version="1.1"
      xmlns="http://www.w3.org/2000.svg">
      <polygon points="150, 18 244, 182 56, 182" fill="yellow"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="purple">
        triangle
      </text>
    </svg>`;
      const shapeTest = new Triangle("triangle", "yellow", "purple");
      expect(shapeTest.render()).toEqual(shapeCode);
    });
  });
});
