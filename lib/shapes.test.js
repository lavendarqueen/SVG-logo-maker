const Circle = require("../lib/circle");
const Square = require("../lib/square");
const Triangle = require("../lib/triangle");
// const Circle = require("./circle");

// Need to write tests for circle, square, and triangle but not for Shape

// Test to check that user's shapes and colors are rendered correctly
describe("Shape", () => {
  describe("renderShape", () => {
    it("should be a purple circle", () => {
      const shapeCode = `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="300" height="300" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}"
  />
    <text
      x="150"
      y="125"
      font-size="60"
      text-anchor="middle"
      fill="${this.textColor}"
    >
      ${this.shapeName}
    </text>
  </svg>`;
      const shapeTest = new Shape("circle", "purple");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });

  describe("renderShape", () => {
    it("should be a blue square", () => {
      const shapeCode = `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="300" height="300" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}"
  />
    <text
      x="150"
      y="125"
      font-size="60"
      text-anchor="middle"
      fill="${this.textColor}"
    >
      ${this.shapeName}
    </text>
  </svg>`;
      const shapeTest = new Shape("square", "blue");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });

  describe("renderShape", () => {
    it("should be a yellow triangle", () => {
      const shapeCode = `<svg version="1.1"
      xmlns="http://www.w3.org/2000.svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      <text
        x="150"
        y="125"
        font-size="60"
        text-anchor="middle"
        fill="${this.textColor}">
        ${this.shapeName}
      </text>
    </svg>`;
      const shapeTest = new Shape("triangle", "yellow");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
});
