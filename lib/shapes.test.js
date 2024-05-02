const Shape = require("../lib/shape");
// const Circle = require("./circle");

// Test to check that user's shapes and colors are rendered correctly
describe("Shape", () => {
  describe("renderShape", () => {
    it("should be a purple circle", () => {
      const shapeCode = `<circle r="150" cx="150" cy="150" fill="purple"/>`;
      const shapeTest = new Shape("circle", "purple");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });

  describe("renderShape", () => {
    it("should be a blue square", () => {
      const shapeCode = `<rect width="300" height="300" fill="blue" />`;
      const shapeTest = new Shape("square", "blue");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });

  describe("renderShape", () => {
    it("should be a yellow triangle", () => {
      const shapeCode = `<polygon points="150 20.1 300 279.9 0 279.9" fill="yellow" />`;
      const shapeTest = new Shape("triangle", "yellow");
      expect(shapeTest.renderShape()).toEqual(shapeCode);
    });
  });
});
